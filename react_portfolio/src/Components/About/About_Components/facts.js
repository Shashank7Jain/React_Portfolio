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
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "100px",
        paddingBottom: "100px",
        backgroundColor: "#fffdfc",
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
            <p>
              I was born and bought up South India and my  hobbies are photography,
              cooking, and badminton. My lucky number is 7 and I have travelled to many countries and in Sydney, I covered all most all the suburbs. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fact;
