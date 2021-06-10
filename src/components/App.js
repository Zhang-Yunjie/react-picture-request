import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {};

    async onSearchSubmit(term) {
        const response = await axios
        .get('https://api.unsplash.com/search/photos',{
            params: {query: term },
            headers: {
                Authorization: 'Client-ID 5hTLtlPDFAfdPC5sQCkC1OOEZaW9d6qfBRA2FMQs7XI'
            }
        });
        //.then(response => console.log(response.data.results));

        console.log(response.data.results);
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