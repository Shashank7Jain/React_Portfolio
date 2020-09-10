import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Passion = (props) => {
  return (
    <div style={{ height: "auto", paddingRight: "100px",paddingLeft:"100px", paddingTop:"100px",paddingBottom:"100px",backgroundColor: "#fffdfc"   }}>
      <Container>
        <Row>
          <Col xs lg="6">
            <img src="facts_image.jpg" width="100%" height="auto" alt="Image error" />
          </Col>
          <Col xs lg="6" style={{ alignSelf: "center" }}>
            <h1>My passion and focus is Website development</h1>
            <br />
            <p>
              Let's be honest and cut through the marketing fluff. You need a
              website that looks amazing and actually works. Bottom line, that's
              what I do. And if you want to learn more about working with me,
              pick up the phone and give me a call (or email).
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Passion;
