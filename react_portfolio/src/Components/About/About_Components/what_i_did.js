import React from "react";
import styles from "styled-components";

const DivStyles = styles.div`
    height:auto;
    background-color: white;
    padding:50px 100px;

    `;
const H1Styles = styles.h1`
    font-size:60px;
`;
const PStyles = styles.p`
    color: #000000;
    font-size: 20px;
`;
//const history = useHistory();
//const contactButton = () => history.push('login');

const ButtonStyles = styles.button`
    border: 1px solid black;
    background: none;
    padding-top:12px;
    padding-bottom:12px;
    padding-right:30px;
    padding-left:30px;
    margin-left 20px;
    color: black;
    &:hover  {
        color: white;
        background:black;
    }
`;
const resumeButton = () => {
 // console.log("need to work on the contact button");
  window.location.href = "/resume";
};

const WhatIDid = (props) => {
  return (
      <div style={{ backgroundColor: "white" }}>
        <DivStyles>
          <H1Styles>What I've done & what I can do?</H1Styles>
          <br />
          <br />
          <br />
          <PStyles>
            Feel free to take a deeper look at what I've accomplished over the
            years and what I'm able to do for you. <br/> My resume goes over the
            standard items, but please understand that I don't embellish my
            capabilities <br/> (no good ever comes out of that).
          </PStyles>
          <br />
          <br />
          <br />
          <ButtonStyles type="button" onClick={resumeButton}>
            VIEW MY RESUME
          </ButtonStyles>
        </DivStyles>
      </div>
  );
};

export default WhatIDid;
