import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import resume_data from "../../../data/resume_data.json";

const H5Styles = styled.h5`
  font-size: 24px;
  font-weight: 400;
`;
const PTag = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const Astyled=styled.a`
    font-weight:600;
    text-decoration:none !important;
    &:hover  {
        color: black;
    }
`;

const Education = (props) => {
  console.log(resume_data.education[0].description);
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px", textAlign: "left",backgroundColor: "#fffdfc" }}>
      <Container>
        <Row>
          <Col xs={4}>
            <H5Styles>Education</H5Styles>
          </Col>
          <Col>
            
            
            <PTag>
              {" "}
              {resume_data.education[0].qualification} (
              {resume_data.education[0].major} )
            </PTag>
            <PTag>
              <Astyled href="https://www.sydney.edu.au/">
                {resume_data.education[0].uni}
              </Astyled> <i> {resume_data.education[0].year} </i>
            </PTag>
            <p>{resume_data.education[0].description}</p>
            <br />

           
            <PTag>
              {" "}
              {resume_data.education[1].qualification} (
              {resume_data.education[1].major} )
            </PTag>
            <PTag>
              <Astyled href="https://www.sydney.edu.au/">
                {resume_data.education[1].uni}
              </Astyled> <i> {resume_data.education[1].year} </i>
            </PTag>
            <p>{resume_data.education[1].description}</p>
            <br />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
/**"education":[
    {
      "qualification":"Masters of Information Technology and Master of Information Technology Management",
      "uni": "The University of Sydney",
      "location": "Sydney, Australia",
      "major": "Software Engineering",
      "year":"2018-2020",
      "description":"I am doing masters in information technology"
    },
    {
      "qualification":"Batchelor of Computer Science and System Engineering",
      "uni": "Andhra University",
      "location": "Visakhapatnam, India",
      "major": "Software Engineering",
      "year": "2014-2018",
      "description":"I am have completed my batchelor"
    }
    ]
**/
