import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    state = {videos: []}

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items})
        return true;
    };

    render() {
        return (
            <div><SearchBar onSubmit={this.onSearchSubmit}/></div>
        );
    }
}

export default App;
