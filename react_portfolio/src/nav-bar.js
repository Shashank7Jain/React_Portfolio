import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import styled from 'styled-components';
//import logo from 'src/icon.png';

const LinkStyle = styled(NavLink)`     
  font-size:20px;
  font-family:auto;

  &:hover  {
    text-decoration: underline;
}
`;
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.divstyle}>
          <Navbar bg="#fcfeff" expand="lg">
            <Navbar.Brand as={Link} to="/">
              <img alt="Shashank Jain" src="icon.png" width="60" height="60" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <LinkStyle className="nav-item nav-link" as={Link} to="/portfolio">
                  PORTFOLIO
                </LinkStyle>
                <LinkStyle className="nav-item nav-link" as={Link}  to="/about">
                  ABOUT
                </LinkStyle>
                <LinkStyle className="nav-item nav-link" as={Link}  to="/resume">
                  RESUME
                </LinkStyle>
                <LinkStyle className="nav-item nav-link" as={Link}  to="/blog">
                  BLOG
                </LinkStyle>
                <LinkStyle className="nav-item nav-link" as={Link}  to="/contact">
                  CONTACT
                </LinkStyle>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
