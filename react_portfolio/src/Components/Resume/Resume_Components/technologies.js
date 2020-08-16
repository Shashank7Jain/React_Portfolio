import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';


const Technologies = (props) => {
  return (
    <div style={{marginTop:"50px",marginBottom:"50px",textAlign:"left"}}>
      <Container>
        <Row>
          <Col>
            <h5>Technologies</h5>
          </Col>
          <Col>
            <h5>DAY-TO-DAY COMFORT</h5>
            <div >
              <ul style={{ textAlign: "left" }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Version Control (GIT)</li>
                <li>Bootstrap</li>
                <li>SQL</li>
              </ul>
            </div>
          </Col>
          <Col>
            <h5>EXPERIENCE WITH</h5>
            <div >
              <ul style={{ textAlign: "left", alignItems: "center" }}>
                <li>ReactJS</li>
                <li>Angular 9</li>
                <li>Spring Framework</li>
                <li>PySpark (Limited)</li>
                <li>Java</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
