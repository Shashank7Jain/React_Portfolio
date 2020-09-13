import React from "react";
import styled from "styled-components";

const AStyles = styled.a`
  color: #e0b057s;
  font-weight: 600;
  text-decoration: none !important;
  &:hover {
    color: black;
  }
`;
const H5Styles = styled.h5`
  font-size: 22px;
  font-weight: 500;
  text-align:left
`; 
const Project = (props) => {
  if (props.pro.website) {
    var button = <AStyles  target="_blank"  href={props.pro.website}>View application</AStyles>;
  }
  return (
    <div>
      <H5Styles >{props.pro.name}</H5Styles>
      <p style={{ textAlign: "left" }}>{props.pro.description}</p>
      <p style={{ textAlign: "left" }}>{button}</p>
      <br />
      <br />
    </div>
  );
};

export default Project;
