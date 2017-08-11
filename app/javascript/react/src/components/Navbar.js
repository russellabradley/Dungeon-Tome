import React from 'react';
import { Redirect } from 'react-router'
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.signOutOnClick = this.signOutOnClick.bind(this)
  }

  signOutOnClick() {
    window.localStorage.clear("token")
  }

  render() {

    return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-4 z-depth-5">
            <a className="brand-logo header-cinzel-font -bold">Dungeon Tome</a>
            <ul className="right">
              <li><a href='/' className="grey darken-2 btn" onClick={this.signOutOnClick}>Sign Out</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
