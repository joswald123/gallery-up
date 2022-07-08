import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

//pgk
import axios from 'axios';

// Components
import Nav from './components/Nav'
import SearchForm from './components/SearchForm';
import ContainerPhotos from './components/ContainerPhotos';


class App extends Component {
  
  state = {
    photos: [],
    query: ""
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
        photos: response.data.photos.photo,
        query: query
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
          <Nav onClick={this.searchFunction}/>

          <Switch>
            <Route exact path="/" render={ () => < ContainerPhotos data={this.state.photos} />} />
            <Route exact path="/" render={ () => < ContainerPhotos data={this.state.photos} />} />
          </Switch>


        </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
