import React from "react";
import { Container, Col,Row } from "react-bootstrap";
import projects from "../../../data/projects.json";
import Project from "./project";

const Projects = (props) => {
    console.log(projects);
  return (
    <div style={{ margin: "90px" }}>
      <div>
        <Container>
          <Row>
            <Col xs={4}>
              <h5>MY PROJECTS</h5>
            </Col>
            <Col>
              {projects.Projects.map((pro, index) => {
                return <Project pro={pro} />;
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
