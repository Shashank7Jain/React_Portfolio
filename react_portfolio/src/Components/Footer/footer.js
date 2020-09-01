import React,{useEffect} from 'react';
import styles from 'styled-components';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Link, useLocation } from "react-router-dom";

const DivStyles = styles.div`
    height :500px;
    background: black;`
const DivInner = styles.div`
    padding:10px`
const H1Styles = styles.h1`
    color :white;
    padding-bottom:50px;
    font-size:50px;
    padding-top:50px`
const DeclareP = styles.p`
    color: gray;
    margin-top:50px;
    margin-bottom:50px;
    `

const Footer = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return ( 
        <DivStyles>
            <DivInner>
            <H1Styles>Let me build the website you need!</H1Styles>
            <div>
                <Navbar bg="black" variant="dark">
                <Nav className="mx-auto" >
                    <Nav.Link  as={Link} to="/">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio">PORTFOLIO</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="/resume">RESUME</Nav.Link>
                    <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                    <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                </Nav>
                </Navbar>
            </div>
            <div>
                <DeclareP>2020 Shashank Jain. Developer of this website.</DeclareP>
            </div>
            <div>
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(11,10,10,1)" backgroundColor="rgba(250,250,255,1)" iconSize="3" roundness="41%" url="https://www.linkedin.com/in/shashank-jain-b47a2b123/" size="25" />
            &nbsp;&nbsp;
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(11,10,10,1)" backgroundColor="rgba(250,250,255,1)" iconSize="3" roundness="41%" url="https://www.facebook.com/shashank.jain.15" size="25" /> 
            &nbsp;&nbsp;
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(11,10,10,1)" backgroundColor="rgba(250,250,255,1)" iconSize="3" roundness="41%" url="https://www.instagram.com/shashank7jain/" size="25" />
            &nbsp;&nbsp;
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(11,10,10,1)" backgroundColor="rgba(250,250,255,1)" iconSize="3" roundness="41%" url="https://github.com/Shashank7Jain" size="25" />
            &nbsp;&nbsp;
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail" iconColor="rgba(11,10,10,1)" backgroundColor="rgba(250,250,255,1)" iconSize="3" roundness="41%" url="mailto:sjai6788@uni.sydney.edu.au" size="25" />
            </div>
            </DivInner>

        </DivStyles>
     );
}
 
export default Footer;