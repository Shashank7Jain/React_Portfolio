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
              I was born and bought up South India, but my parents are from North India.  
              I hobbies photography, cooking, and badminton. I'm from big family and my eldest sister is 18 years older than me and I was never pampered at home.
              I'm not a big fan of watching sports because I enjoy playing them. My lucky number is 7 and I love exploring places.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fact;
