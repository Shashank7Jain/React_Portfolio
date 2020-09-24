import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';

const H5Styles = styled.h5`
  font-size:24px;
  font-weight: 400;
  font-family:auto;
  text-align: left  ;
`;
const ListStyles = styled.li`
  font-size: 18px; 
  margin: 5px; 

`;

const Technologies = (props) => {
  return (
    <div style={{ paddingLeft: "100px",paddingRight:"100px", paddingTop:"50px",paddingBottom:"50px",textAlign:"left",backgroundColor: "#f7f7f75e ",objectFit: "contain"}}>
      <Container fluid>
        <Row>
          <Col xs={4}>
            <H5Styles>Technologies</H5Styles>
          </Col>
          <Col xs={4}>
            <h5>DAY-TO-DAY COMFORT</h5>
            <div >
              <ul style={{ textAlign: "left" }}>
                <ListStyles>HTML5</ListStyles>
                <ListStyles>CSS3 / SCSS </ListStyles>
                <ListStyles>JavaScript</ListStyles>
                <ListStyles>TypeScript</ListStyles>
                <ListStyles>Bootstrap</ListStyles>
                <ListStyles>ReactJS</ListStyles>
                <ListStyles>Angular 9</ListStyles>
                <ListStyles>Version Control (GIT)</ListStyles>
                <ListStyles>Cross-Browser Compatibility</ListStyles>
                <ListStyles>SQL</ListStyles>
                <ListStyles>VS Code</ListStyles>
                <ListStyles>Photoshop / Sketch</ListStyles>
              </ul>
            </div>
          </Col>
          <Col xs lg="4">
            <h5>EXPERIENCE WITH</h5>
            <div >
              <ul style={{ textAlign: "left", alignItems: "center" }}>
                

                <ListStyles>Node.js</ListStyles>
                <ListStyles>Spring Frameworks</ListStyles>
                <ListStyles>REST API's</ListStyles>
                <ListStyles>PySpark (limited)</ListStyles>
                <ListStyles>Python (limited)</ListStyles>
                <ListStyles>Java SE8</ListStyles>
                <ListStyles>Tableau</ListStyles>
                <ListStyles>MongoDB</ListStyles>
                <ListStyles>Agile</ListStyles>
                <ListStyles>Scrum</ListStyles>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
