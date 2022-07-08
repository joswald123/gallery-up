import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pgk
import axios from 'axios';

// Components
import Nav from './components/Nav'
import SearchForm from './components/SearchForm';
import ContainerPhotos from './components/ContainerPhotos';


class App extends Component {
  
  state = {
    photos: []
  }
 
  // SearchFunction is invoke immediately after the component is mounted
  componentDidMount() {
    this.searchFunction();
  }

  // Fetching the data
  searchFunction = (query = "dogs") => {
    const apiKey = process.env.REACT_APP_FLICKR_KEY
    axios.get(`${process.env.REACT_APP_FLICKR_URL}search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
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
      <BrowserRouter>
      <div className="container">
        <SearchForm onSearch={this.searchFunction}/>
        <Nav />
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <ContainerPhotos data={this.state.photos}/>
        </ul>
        </div>
      </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
