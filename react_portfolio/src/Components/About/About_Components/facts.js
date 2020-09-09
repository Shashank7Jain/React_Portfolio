import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Fact = (props) => {
  return (
    <div style={{ height: "auto", paddingRight: "100px",paddingLeft:"100px", paddingTop:"100px",paddingBottom:"100px", backgroundColor: "#fffdfc" }}>
      <Container>
        <Row>
          <Col xs lg="6">
            <img src="fact_image.jpg" width="100%" style={{ objectFit: "cover", maxWidth: "800px" }}  />
          </Col>
          <Col xs lg="6" style={{ alignSelf: "center" }}>
            <h1>A few fun facts about myself!</h1>
            <br />
            <p>
              I was born and bought up in India, came to Sydney 2 times as a tourist and that's when I decided to 
              do my masters here. I hobbies are taking photos, cooking and playing badminton. I'm from big family and I'm the youngest of all
              I am not a big fan of any sports because I enjoy playing them. My lucky number is 7 and I love travelling along.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fact;
