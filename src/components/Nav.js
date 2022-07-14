import React from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Nav = () => {
  // Passing props (word) to our parent component to perform our search function 
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/orchid">Orchid</NavLink></li>
        <li><NavLink to="/tulip">Tulip</NavLink></li>
        <li><NavLink to="/petunia">Petunia</NavLink></li>
      </ul>
    </nav>
  ); 
    
}

export default Nav;