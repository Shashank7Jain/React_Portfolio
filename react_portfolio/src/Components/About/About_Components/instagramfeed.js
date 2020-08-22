import React from "react";
import { Button, Card, Row, Container, Col } from "react-bootstrap";

const Instagram = (props) => {
  return (
    <div style={{ height: "700px" }}>
      <h1>My Instagram Feed</h1>
      <div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" />
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" />
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" />
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" />
              </Card>
            </Col>
            
          </Row>
          <br/>
          <Row>
            <Col >
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png"width="100px"/>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png"width="100px" />
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" width="100px"/>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" width="100px" />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="favicon-32x32.png" width="100px" />
              </Card>
            </Col>

          </Row>
        </Container>

        <div style={{marginTop:"40px"}}>
        <button>FOLLOW ME ON INSTAGRAM</button>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
