import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import projects from "../../../data/projects.json";
import Project from "./project";
import styles from "styled-components";

const Divstyles = styles.div`
  height:auto;
  padding:100px;
`;
const H5Styles = styles.h5`
  font-size:24px;
  font-weight: 400;
  font-family:auto;
  text-align: left  ;
`;
const PStyles = styles.p`
  text-align:left;
`;
const Astyled=styles.a`
    font-weight:600;
    text-decoration:none !important;
    &:hover  {
        color: black;
    }
`;

const Projects = (props) => {
  console.log(projects);
  return (
    <Divstyles>
      <div>
        <Container fluid>
          <Row>
            <Col xs={4}>
              <H5Styles>MY PROJECTS</H5Styles>
            </Col>
            <Col xs={8}>
              {projects.Projects.map((pro, index) => {
                return <Project pro={pro} />;
              })}
              <PStyles style={{ textAlign: "left" }}>
                For further information and code, kindly refer my{" "}
                <Astyled href="https://github.com/Shashank7Jain">GitHub Repository</Astyled>
              </PStyles>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    </Divstyles>
  );
};

export default Projects;
