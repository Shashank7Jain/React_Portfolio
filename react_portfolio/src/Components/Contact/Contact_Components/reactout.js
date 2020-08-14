import React from 'react';
import styled from 'styled-components';

const DivStyles = styled.div`
    height: 250px;
    background: #0b4c49d9;
    margin 50px;
`
const H1Styles = styled.h1`
    color :white;
    padding-bottom:20px;
    font-size:50px;
    padding-top:50px`

const ReactOut = (props) => {
    return ( 
    <div>
        <DivStyles>
            <H1Styles>Reach out to me directly!  </H1Styles>
            <h1>0469321345 || 1509sj@gmail.com</h1>
        </DivStyles>
        <div>
            
        </div>
    </div> );
}
 
export default ReactOut;