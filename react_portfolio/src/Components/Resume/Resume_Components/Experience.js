import React from "react";
import styled from 'styled-components';

const Astyled=styled.a`
    font-weight:600;
    text-decoration:none !important;
    &:hover  {
        color: black;
    }
`;
const PTag = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const Experience = (props) => {
  return (
    <div>
      
      <PTag>
        {" "}
        <i>
        {props.exp.role.toUpperCase()}{" "}
        
          [{props.exp.start_date} - {props.exp.end_date}] {" "}
        </i>
      </PTag>
      <PTag>
        {props.exp.emp_type},{" "}
        <b>
          {" "}
          <Astyled href={props.exp.website}>{props.exp.company}</Astyled>{" "}
        </b>
        , {props.exp.city}{" "}
      </PTag>

      <p style={{paddingBottom:"10px",fontSize:"17px"}}>{props.exp.description}</p>
      
    </div>
  );
};

export default Experience;
