import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';

const H5Styles = styled.h5`
  font-size:24px;
  font-weight: 400;
`;
const ListStyles = styled.li`
  font-size: 18px; 
  margin: 5px; 
`;

const Technologies = (props) => {
  return (
    <div style={{margin:"100px",textAlign:"left",backgroundColor: "#fffdfc"}}>
      <Container>
        <Row>
          <Col>
            <H5Styles>Technologies</H5Styles>
          </Col>
          <Col>
            <h5>DAY-TO-DAY COMFORT</h5>
            <div >
              <ul style={{ textAlign: "left" }}>
                <ListStyles>HTML5</ListStyles>
                <ListStyles>CSS3 </ListStyles>
                <ListStyles>JavaScript</ListStyles>
                <ListStyles>Bootstrap</ListStyles>
                <ListStyles>ReactJS</ListStyles>
                <ListStyles>Version Control (GIT)</ListStyles>
                <ListStyles>Cross-Browser Compatibility</ListStyles>
                <ListStyles>SQL</ListStyles>
              </ul>
            </div>
          </Col>
          <Col>
            <h5>EXPERIENCE WITH</h5>
            <div >
              <ul style={{ textAlign: "left", alignItems: "center" }}>
                
                <ListStyles>Angular 9</ListStyles>
                <ListStyles>Node.js</ListStyles>
                <ListStyles>Spring Frameworks</ListStyles>
                <ListStyles>PySpark (limited)</ListStyles>
                <ListStyles>Python (limited)</ListStyles>
                <ListStyles>Java</ListStyles>
                <ListStyles>Tableau</ListStyles>
                <ListStyles>MongoDB</ListStyles>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
