import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Axios pgk
import axios from 'axios';

// Components
import Nav from './components/Nav'
import SearchForm from './components/SearchForm';
import ContainerPhotos from './components/ContainerPhotos';
import FourError from './components/FourError';


class App extends Component {
  
  state = {
    photos: [],
    query: '',
    loading: true
  }
 
  // SearchFunction is invoke immediately after the component is mounted
  componentDidMount() {
    this.searchFunction();
  }

  // Fetching the data when the search function is performed
  searchFunction = (query = "flower") => {
    const apiKey = process.env.REACT_APP_FLICKR_KEY
    axios.get(`${process.env.REACT_APP_FLICKR_URL}search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      this.setState({
        photos: response.data.photos.photo,
        query: query,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
  }
  
  render() {
    
    if(this.state.loading){
      return <h1>Loading....</h1>
    }
    
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.searchFunction}/>
          <Nav onSearch={this.searchFunction}/>

          <Switch>
            <Route exact path="/" render={ () => <ContainerPhotos data={this.state.photos} query={this.state.query}/>} />
            <Route exact path="/search/:keyword" render={ () => <ContainerPhotos data={this.state.photos} query={this.state.query}/>} />
            <Route component={FourError}/>
          </Switch>


        </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
