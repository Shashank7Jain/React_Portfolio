import React from "react";
import styles from 'styled-components';

const PStyles = styles.p`
    color: #000000;
    font-size: 25px;
    margin-top:100px;
`;
const H1Styles = styles.h1`
    font-size:60px;
    margin-bottom:100px
`;

const Introduction = (props) => {
  return (
    <div style={{ height: "auto", padding: "100px" }}>
      <H1Styles>
        I'm a dedicated developer
      </H1Styles>
      <PStyles >
        Being that I've based my career on Information Technology, and
        there's nothing I can't handle. Below you'll find a selection of some of
        my most recent projects that showcase the type of skills I possess.
      </PStyles>
    </div>
  );
};

export default Introduction;
