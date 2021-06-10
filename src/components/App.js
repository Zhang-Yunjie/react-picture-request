import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {};

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term },
            headers: {
                Authorization: 'Client-ID 5hTLtlPDFAfdPC5sQCkC1OOEZaW9d6qfBRA2FMQs7XI'
            }
        });
    }

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