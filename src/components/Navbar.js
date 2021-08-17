import React, { Component } from 'react'
import moneysack from '../moneysack.svg'


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light fixed-top bg-light flex-md-nowrap p-0 shadow">
          <img src={moneysack} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; SUPERIO Yield Farm

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>


      </nav>
    );
  }
}

export default Navbar;
