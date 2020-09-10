import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import projects from "../../../data/projects.json";
import Project from "./project";
import styles from "styled-components";

const Divstyles = styles.div`
  height:auto;
  padding:100px;
  background-color:#fffdfc
`;
const H5Styles = styles.h5`
  font-size: 26px;
  font-weight: 400;
`;
const PStyles = styles.p`
  text-align:left;
`;

const Projects = (props) => {
  console.log(projects);
  return (
    <Divstyles>
      <div>
        <Container>
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
                <a href="https://github.com/Shashank7Jain">GitHub Repository</a>
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
