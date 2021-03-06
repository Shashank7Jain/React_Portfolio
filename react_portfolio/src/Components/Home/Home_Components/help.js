import React from 'react';
import styled from 'styled-components';

const DivStyles= styled.div`
    height:auto;
    padding:100px;
    background-image:url("nee.jpg");
    background-size:cover;
    background-position:center;
    border: 1px white;
`;

const ButtonStyles = styled.button`
    border: 1px solid white;
    background: none;
    padding-top:12px;
    padding-bottom:12px;
    padding-right:30px;
    padding-left:30px;
    margin-left 20px;
    color: white;

    &:hover  {
        color: white;
        background:black
    }

`;
const contactButton = () => {
    // console.log("need to work on the contact button");
     window.location.href = "/contact";
   };


const Help = (props) => {
    return ( <DivStyles >
        <div style={{height:"auto", outline: "2px solid #CCC"}}>
        <br />
        <h1 style={{color:"white"}}>Need help from a Web Developer</h1>
        <h1 style={{color:"white"}}>Lets discuss your needs in detail.</h1>
        <br />
        <br />
        <ButtonStyles type="button" onClick={contactButton}>I'M HERE TO HELP YOU</ButtonStyles>
        <br></br>
        <br></br>
        </div>
    </DivStyles> );
}
 
export default Help;