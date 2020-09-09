import React from "react";
import styled from 'styled-components';

const Astyled=styled.a`
    font-weight:600;
    text-decoration:none !important;
    &:hover  {
        color: black;
    }
`;
const Experience = (props) => {
  return (
    <div style={{ backgroundColor: "#fffdfc" }}>
      <p>
        {" "}
        <b>{props.exp.role.toUpperCase()}</b>{" "}
        <i>
          {props.exp.start_date} - {props.exp.end_date}{" "}
        </i>
      </p>
      <p>
        {props.exp.emp_type},{" "}
        <b>
          {" "}
          <Astyled href={props.exp.website}>{props.exp.company}</Astyled>{" "}
        </b>
        , {props.exp.city}{" "}
      </p>

      <p>{props.exp.description}</p>
      <br />
    </div>
  );
};

export default Experience;
