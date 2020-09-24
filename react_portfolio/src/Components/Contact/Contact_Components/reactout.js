import React from 'react';
import styled from 'styled-components';

const DivStyles = styled.div`
    height: auto;
    background: #f7f7f75e ;
    padding: 100px 100px;
    

`
const H1Styles = styled.h1`
    color :black;
    padding-bottom:20px;
    font-size:60px;
    padding-top:50px;
    font-family:auto
    font-weight:600`;

const AStyles = styled.a`
    color: #e0b057s;
    font-weight: 400;
    text-decoration:none !important;
    &:hover  {
        color: black;
    }
`;

const ReactOut = (props) => {
    return ( 
    <div>
        <DivStyles>
            <div style={{height:"auto", outline: "2px solid #000"}}>
            <H1Styles>Reach out to me directly!  </H1Styles>
            <h1 style={{paddingBottom:"40px"}}> <AStyles href="tel:0469321345">0469321345</AStyles> ||  <AStyles href="mail:1509sj@gmail.com">1509sj@gmail.com</AStyles></h1>
            </div>
        </DivStyles>
        <div>
            
        </div>
    </div> );
}
 
export default ReactOut;