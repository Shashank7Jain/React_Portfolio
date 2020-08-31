import React from 'react';
import {Container, Col,Row} from 'react-bootstrap';

const Passion = (props) => {
    return ( <div style={{height:"600px", margin:"100px"}}>
        <Container>
  <Row>
    <Col>
        <img src ="facts_image.jpg" width="400" height="500"/>
    </Col>
    <Col style={{textAlign:"center", marginTop:"120px"}}>
        
        <h1>My passion and focus is Squarespace development</h1>
        <br />
        <p>Let's be honest and cut through the marketing fluff. You need a website that looks amazing and actually works. Bottom line, that's what I do. And if you want to learn more about working with me, pick up the phone and give me a call (or email).</p>
    </Col>
  </Row>
  </Container>        
    </div> );
}
 
export default Passion;