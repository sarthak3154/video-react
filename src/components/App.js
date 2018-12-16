import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    onSearchSubmit = async (term) => {
        //TODO remove sleep fn and fetch videos from the youtube api
        await this.sleep(2000);
        return true;
    };

    render() {
        return (
            <div><SearchBar onSubmit={this.onSearchSubmit}/></div>
        );
    }
}

export default App;
