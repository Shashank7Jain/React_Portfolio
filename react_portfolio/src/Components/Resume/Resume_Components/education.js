import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import resume_data from "../../../data/resume_data.json";

const Education = (props) => {
  console.log(resume_data.education[0].description);
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px", textAlign: "left" }}>
      <Container>
        <Row>
          <Col xs={4}>
            <h5>Education</h5>
          </Col>
          <Col>
            <p>
              {" "}
              <b>
                {resume_data.education[0].qualification} (
                {resume_data.education[0].major} )
              </b>
            </p>
            <p>
              {resume_data.education[0].uni},{resume_data.education[0].location}{" "}
              {resume_data.education[0].year}
            </p>
            <p>{resume_data.education[0].description}</p>
            <br />
            <p>
              {" "}
              <b>
                {resume_data.education[1].qualification} (
                {resume_data.education[1].major} )
              </b>
            </p>
            <p>
              {resume_data.education[1].uni},{resume_data.education[1].location}{" "}
              {resume_data.education[1].year}
            </p>
            <p>{resume_data.education[1].description}</p>
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
