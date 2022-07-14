import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Axios pgk
import axios from 'axios';

// Api Key
import apiKey from './config';

// Components
import Nav from './components/Nav'
import SearchForm from './components/SearchForm';
import ContainerPhotos from './components/ContainerPhotos';
import FourError from './components/FourError';


class App extends Component {
  
  state = {
    photos: [],
    orchid: [],
    tulip: [],
    petunia: [],
    query: '',
    loading: true
  }
 
  // SearchFunction is invoke immediately after the component is mounted
  componentDidMount() {
    this.searchFunction();
    this.searchFunction("orchid");
    this.searchFunction("tulip");
    this.searchFunction("petunia");
  }

  // Fetching the data when the search function is performed
  searchFunction = (query = "flower") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      if(query === "orchid") {
        this.setState({
          orchid: response.data.photos.photo,
          // query: query,
          loading: false
        })
      } else if(query === "tulip") {
        this.setState({
          tulip: response.data.photos.photo,
          
          loading: false
        })
      } else if(query === "petunia") {
        this.setState({
          petunia: response.data.photos.photo,
          
          loading: false
        })
      } else {
        this.setState({
          photos: response.data.photos.photo,
          query: query,
          loading: false
      })
    }
      
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
          <Routes>
            <Route  path="/" element={<ContainerPhotos data={this.state.photos} query={this.state.query}/>} />
            <Route  path="/orchid" element={<ContainerPhotos data={this.state.orchid} query={"orchid"}/>} />
            <Route  path="/tulip" element={<ContainerPhotos data={this.state.tulip} query={"tulip"}/>} />
            <Route  path="/petunia" element={<ContainerPhotos data={this.state.petunia} query={"petunia"}/>} />
            <Route path="*" element={<FourError />}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
