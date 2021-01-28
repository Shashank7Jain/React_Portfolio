import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from 'styled-components';

const H1Styles = styled.h1`
    color :black;
    padding-bottom:20px;
    font-size:50px;
    `
const Passion = (props) => {
  return (
    <div
      style={{
        height: "auto",
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "100px",
        paddingBottom: "50px",
        backgroundColor:"#f7f7f75e",
      }}
    >
      <Container>
        <Row>
          <Col xs lg="6">
            <img src="facts_image.jpg" width="100%" alt="facts_image"  height="auto"/>
          </Col>
          <Col xs lg="6" style={{ alignSelf: "center" }}>
            <H1Styles>My passion and focus is Web Development</H1Styles>
            <br />
            <p style={{fontFamily:"'Epilogue', sans-serif"}}>
              Let's get straight to the point. You need someone who is capable of creating a
              website that looks amazing and actually works. Bottom line, that's
              what I do. And if you want to learn more about me,
              pick up the phone and give me a call (or email).
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Passion;
