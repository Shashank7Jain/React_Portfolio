import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import styles from 'styled-components';

const ButtonStyles = styles.button`
    border: 1px solid black;
    background: none;
    padding-top:12px;
    padding-bottom:12px;
    padding-right:30px;
    padding-left:30px;
    margin-left 20px;
    color: blue;

    &:hover  {
        color: black;
    }

`;
const instaButton = () => {
  window.location.assign("https://www.instagram.com/shashank7jain/")
};

const Instagram = (props) => {
  return (
    <div style={{ height: "auto", paddingRight: "100px",paddingLeft:"100px", paddingTop:"50px",backgroundColor: "#fffdfc" }}>
      <div>
        <Container>
          <Row style={{paddingTop:"20px"}}>
            <Col xs lg="12">
            <h1 style={{fontSize:"50px"}}>My Instagram Feed</h1>
            </Col>
          </Row>
          <Row>
            <Col xs lg="3">
              <Card >
                <Card.Img variant="top" src="insta1.jpg" />
              </Card>
            </Col>

            <Col xs lg="3">
              <Card >
                <Card.Img variant="top" src="insta2.jpg" />
              </Card>
            </Col>

            <Col xs lg="3">
              <Card >
                <Card.Img variant="top" src="insta3.jpg" />
              </Card>
            </Col>

            <Col xs lg="3">
              <Card >
                <Card.Img variant="top" src="insta7.jpg" />
              </Card>
            </Col>

            
          </Row>
          <br/>
          <Row>
            <Col xs lg="3">
              <Card >
                <Card.Img variant="top"  src="insta5.jpeg" />
              </Card>
            </Col>

            <Col xs lg="3">
              <Card >
                <Card.Img variant="top" src="insta6.jpeg" />
              </Card>
            </Col>

            <Col xs lg="3">
              <Card >
                <Card.Img variant="top" src="insta4.jpg" />
              </Card>
            </Col>

            <Col xs lg="3">
              <Card >
                <Card.Img variant="top" src="insta8.jpg" />
              </Card>
            </Col>

            
          </Row>
          <Row style={{padding:"50px"}}>
            <Col  xs lg="12">
            <ButtonStyles type="button" onClick={instaButton}>
          FOLLOW ME ON INSTA
        </ButtonStyles>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
};

export default Instagram;
