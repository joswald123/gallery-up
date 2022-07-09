import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
     
  return(
    <nav className="main-nav">
    <ul>
      <li><NavLink onClick={() => props.onSearch('cats')} exact to="/search/cats">Cats</NavLink></li>
      <li><NavLink onClick={() => props.onSearch('birds')} exact to="/search/birds">Birds</NavLink></li>
      <li><NavLink onClick={() => props.onSearch('pandas')} exact to="/search/pandas">Pandas</NavLink></li>
    </ul>
  </nav>
); 
    
}

export default Nav;