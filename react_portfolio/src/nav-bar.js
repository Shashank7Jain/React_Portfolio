import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
//import logo from 'src/icon.png';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {
      fontSize: "1.2rem",
      color: '#f44336',
      "&:hover": {
        background: "#efefef",
        "&:last-child": {
          borderRight: "solid 1px #cccccc",
        },
      },
    };
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
                <Nav.Link
                  className="nav_link"
                  as={Link}
                  style={style}
                  to="/portfolio"
                  isActive={(match, location) => {
                    if (!match) {
                      console.log("hi")
                      return false;
                    }
                
                    // only consider an event active if its event id is an odd number
                    const eventID = parseInt(match.params.eventID);
                    console.log("hello");
                    return !isNaN(eventID) && eventID % 2 === 1;
                  }}
                
                >
                  PORTFOLIO
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="/about">
                  ABOUT
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="/resume">
                  RESUME
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="/blog">
                  BLOG
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="/contact">
                  CONTACT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
