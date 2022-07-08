import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    state = {
      navText: ''
    }

    onClickChange = e => {
      this.setState({ navText: e.target.value})
      this.props.onClick(this.query.value);
      e.currentTarget.reset();
    }

    handleClick = (e) => {
      e.preventDefault();
      alert('you clicked me')
    }

    render() {
      return(
        <nav className="main-nav">
        <ul>
          <li><NavLink onClick={this.handleClick} exact to="/search/cats">Cats</NavLink></li>
          <li><NavLink exact to="/search/dogs">Dogs</NavLink></li>
          <li><NavLink exact to="/search/pandas">Computers</NavLink></li>
        </ul>
      </nav>
    ); 
  }
    
}

export default Nav;