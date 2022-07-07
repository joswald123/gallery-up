import React, { Component } from 'react';
import Nav from './components/Nav'
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Photo from './components/Photo';
import NotFound from './components/NotFound';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: []
    }
  };
  
  

  componentDidMount() {
    const apiKey = "2ed4de34d46523ba619a652110d5a44f"
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cat&perpage=24&format=json&nojsoncallback=1`)
    .then((response) => {
      console.log(response.data.photos.photo)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
  }

  search

  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
          <NotFound />
        </ul>
        </div>
      </div>
    );
  }
 
}

export default App;
