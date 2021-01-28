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
              City dweller who loves to travel, partake in outdoor activites, and find new adventures along the way. I have found that nothing satisfies me more than meeting new people, developing new relationships, solving problems, and contributing to the overall growth of a business.
        </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fact;
