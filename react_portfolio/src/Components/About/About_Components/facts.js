import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from 'styled-components';

const H1Styles = styled.h1`
    color :black;
    padding-bottom:20px;
    font-size:50px;
    padding-top:50px`


const Fact = (props) => {
  return (
    <div
      style={{
        height: "auto",
        padding:"50px 100px",
        backgroundColor: "#f7f7f75e",
      }}
    >
      <Container>
        <Row>
          <Col xs lg="6">
            <img
              src="fact_image.jpg"
              width="100%"
              alt="fact_image"
              style={{ objectFit: "cover", maxWidth: "800px" }}
            />
          </Col>
          <Col xs lg="6" style={{ alignSelf: "center" }}>
            <H1Styles>A few fun facts about myself!</H1Styles>
            <br />
            <p style={{fontFamily:"'Epilogue', sans-serif"}}>
              I born and raised in South India. My  hobbies are photography,
              cooking, and playing badminton. My lucky number is 7 and I love travelling on my bike and explore new places. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fact;
