import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import './nav-bar.css';
//import logo from 'src/icon.png';
class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log(props.location);
    this.state = {};
  }
  render() {
    console.log(window.location.pathname);

    return (
      <div style={{ paddingRight: "100px", paddingLeft: "100px" }}>
        <Navbar bg="#fcfeff" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img alt="Shashank Jain" src="icon.png" width="60" height="60" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" style={{color:"black"}}>
              <Nav.Link  className="nav_link" as={Link} to="/portfolio">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link style={{color:"black"}} as={Link} to="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link style={{color:"black"}} as={Link} to="/resume">
                RESUME
              </Nav.Link>
              <Nav.Link style={{color:"black"}} as={Link} to="/blog">
                BLOG
              </Nav.Link>
              <Nav.Link style={{color:"black"}} as={Link} to="/contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
