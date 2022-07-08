import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="main-nav">
        <ul>
          <li><Link to="/cats">Cats</Link></li>
          <li><Link to="/dogs">Dogs</Link></li>
          <li><Link to="/pandas">Computers</Link></li>
        </ul>
      </nav>
    ); 
}

export default Nav;