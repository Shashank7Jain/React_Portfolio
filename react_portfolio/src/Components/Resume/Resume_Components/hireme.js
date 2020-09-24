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
    padding:60px 20px;
`;

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
        background-color:black;
    }

`;
const contactButton = () => {
  window.location.href = "/contact";
};
const Hireme = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <DivStyles>
        <H1Styles>Hire me today!</H1Styles>
        <PStyles>
          Now that you know what experience I have and what I might do for you,
          feel free to reach out. For committed company, I really love to
          be a part of their success.
        </PStyles>
        <ButtonStyles type="button" onClick={contactButton}>
          CONTACT ME TODAY
        </ButtonStyles>
      </DivStyles>
    </div>
  );
};

export default Hireme;
