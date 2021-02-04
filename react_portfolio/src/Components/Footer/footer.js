import React from "react";
import styles from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Link } from "react-router-dom";

const DivStyles = styles.div`
    height :auto;
    background: black;`;
    
const DivInner = styles.div`
    padding:40px`;
const H1Styles = styles.h1`
    color :white;
    padding-bottom:50px;
    font-size:50px;
    font-weight:600;
    padding-top:50px`;
const DeclareP = styles.p`
    color: white;
    margin-top:5%;
    margin-bottom:2%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const LinkStyle = styles(Nav.Link)`     
    font-size:18px;
    font-family:auto;
    padding:"10px"
  
    &:hover  {
      text-decoration: underline;
  }
  `;

const Footer = () => {
  return (
    <DivStyles>
      <DivInner>
        <H1Styles>Let me help you build a website!</H1Styles>
        <div>
          
              <Navbar bg="black" variant="dark">
                <Nav className="mx-auto">
                  <LinkStyle as={Link} className="nav-item nav-link" to="/">
                    HOME
                  </LinkStyle>
                  <LinkStyle as={Link} className="nav-item nav-link" to="/portfolio">
                    PORTFOLIO
                  </LinkStyle>
                  <LinkStyle as={Link} className="nav-item nav-link" to="/about">
                    ABOUT
                  </LinkStyle>
                  <LinkStyle as={Link} className="nav-item nav-link" to="/resume">
                    RESUME
                  </LinkStyle>
                  <LinkStyle  as={Link} className="nav-item nav-link" to="/blog">
                    BLOG
                  </LinkStyle>
                  <LinkStyle as={Link} className="nav-item nav-link" to="/contact">
                    CONTACT
                  </LinkStyle>
                </Nav>
              </Navbar>
  
        </div>

        <div style={{marginTop:"5%"}}>
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="linkedin"
            iconColor="rgba(11,10,10,1)"
            backgroundColor="rgba(250,250,255,1)"
            iconSize="3"
            roundness="41%"
            url="https://www.linkedin.com/in/shashank-jain-b47a2b123/"
            size="25"
          />
          &nbsp;&nbsp;
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="facebook"
            iconColor="rgba(11,10,10,1)"
            backgroundColor="rgba(250,250,255,1)"
            iconSize="3"
            roundness="41%"
            url="https://www.facebook.com/shashank.jain.15"
            size="25"
          />
          &nbsp;&nbsp;
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="instagram"
            iconColor="rgba(11,10,10,1)"
            backgroundColor="rgba(250,250,255,1)"
            iconSize="3"
            roundness="41%"
            url="https://www.instagram.com/shashank7jain/"
            size="25"
          />
          &nbsp;&nbsp;
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="github"
            iconColor="rgba(11,10,10,1)"
            backgroundColor="rgba(250,250,255,1)"
            iconSize="3"
            roundness="41%"
            url="https://github.com/Shashank7Jain"
            size="25"
          />
          &nbsp;&nbsp;
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="mail"
            iconColor="rgba(11,10,10,1)"
            backgroundColor="rgba(250,250,255,1)"
            iconSize="3"
            roundness="41%"
            url="mailto:sjai6788@uni.sydney.edu.au"
            size="25"
          />
        </div>
        <div>
          <DeclareP>Made with &nbsp;<span style={{ fontSize:"250%", color:"red"}}>&hearts;</span></DeclareP>
        </div>
      </DivInner>
    </DivStyles>
  );
};

export default Footer;
