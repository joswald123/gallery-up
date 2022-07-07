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
  
  // SearchFunction is invoke immediately after the component is mounted
  componentDidMount() {
    this.searchFunction();
  }

  // Fetching the data
  searchFunction = (query = 'dogs') => {
    const apiKey = "2ed4de34d46523ba619a652110d5a44f"
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      this.setState({
        photos: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
  }

  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo data={this.state.photos}/>
          <NotFound />
        </ul>
        </div>
      </div>
    );
  }
 
}

export default App;
