import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {};

    onSearchSubmit(term) {
        console.log(term)
    } ;

    render() {
        return (
            <div className="ui container" style={{marginTop:'30px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList />
            </div>
        );
    };
    
};

export default App;