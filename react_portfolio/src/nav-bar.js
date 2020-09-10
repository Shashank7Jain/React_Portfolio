import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
//import logo from 'src/icon.png';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(window.location);

    return (
      <div className={styles.background}>
        <div className={styles.divstyle}>
          <Navbar bg="#fcfeff" expand="lg">
            <Navbar.Brand as={Link} to="/">
              <img alt="Shashank Jain" src="icon.png" width="60" height="60" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto" style={{ color: "black" }}>
                <NavLink className="nav-item nav-link"
                  exact
                  as={Link}
                  to="portfolio"
                  activeClassName="active"
                >
                  PORTFOLIO
                </NavLink>
                <NavLink className="nav-item nav-link active" as={Link} activeClassName="active" to="/about">
                  ABOUT
                </NavLink>
                <NavLink className="nav-item nav-link" as={Link} activeClassName="active" to="/resume">
                  RESUME
                </NavLink>
                <NavLink className="nav-item nav-link" as={Link} activeClassName="active" to="/blog">
                  BLOG
                </NavLink>
                <NavLink className="nav-item nav-link" as={Link} activeClassName="active" to="/contact">
                  CONTACT
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
