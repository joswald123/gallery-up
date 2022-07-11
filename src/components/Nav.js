import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  // Passing props (word) to our parent component to perform our search function 
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={() => props.onSearch('orchid')} exact to="/search/orchid">Orchid</NavLink></li>
        <li><NavLink onClick={() => props.onSearch('tulip')} exact to="/search/tulip">Tulip</NavLink></li>
        <li><NavLink onClick={() => props.onSearch('petunia')} exact to="/search/petunia">Petunia</NavLink></li>
      </ul>
    </nav>
  ); 
    
}

export default Nav;