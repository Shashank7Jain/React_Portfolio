import React from 'react';
import styled from 'styled-components';

const DivStyles = styled.div`
    height: 250px;
    background: #fffdfc;
    margin: 100px;
    border: solid 1px;
    border-color: orange;

`
const H1Styles = styled.h1`
    color :black;
    padding-bottom:20px;
    font-size:60px;
    padding-top:50px`

const AStyles = styled.a`
    color: #e0b057s;
    font-weight: 40;
    text-decoration:none !important;
    &:hover  {
        color: black;
    }
`;

const ReactOut = (props) => {
    return ( 
    <div>
        <DivStyles>

            <H1Styles>Reach out to me directly!  </H1Styles>
            <h1><AStyles href="tel:0469321345">0469321345</AStyles> || <AStyles href="mail:1509sj@gmail.com">1509sj@gmail.com</AStyles></h1>
        </DivStyles>
        <div>
            
        </div>
    </div> );
}
 
export default ReactOut;