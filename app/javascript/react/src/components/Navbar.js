import React from 'react';

const Navbar = props => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper grey darken-4 z-depth-5">
        <a href="#!" className="brand-logo header-cinzel-font">Dungeon Tome</a>
        <ul className="right">
          <li><a className="grey darken-2 btn">Sign Out</a></li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar;
