import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
//import logo from 'src/icon.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar bg="#fcfeff" expand="lg">
          <Link to="/">
            <Navbar.Brand href="#home">
              <img alt="Shashank Jain" src="icon.png" width="30" height="30" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/portfolio">
                <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              </Link>
              <Link to="/about">
                <Nav.Link href="#about">ABOUT</Nav.Link>
              </Link>
              <Link to="/resume">
                <Nav.Link href="#resume">RESUME</Nav.Link>
              </Link>
              <Link to="/blog">
                <Nav.Link href="#blog">BLOG</Nav.Link>
              </Link>
              <Link to="/contact">
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
