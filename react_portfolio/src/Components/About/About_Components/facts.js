import React from 'react';
import {Container, Col,Row} from 'react-bootstrap';

const Fact = (props) => {
    return ( <div style={{height:"600px", margin:"100px"}}>
        <Container>
  <Row>
    <Col>
        <img src ="facts_image.jpg" width="400" height="500"/>
    </Col>
    <Col style={{textAlign:"center", marginTop:"120px"}}>
        
        <h1>A few fun facts about myself!</h1>
        <br />
        <p>I work out of Harrisburg PA, I love pour over coffee, I have a cat named after MacGyver, my favorite number is 22, I'm not a huge fan of IPAs, I play video games like it's my life, I knew what I wanted to do at the age of 13, I downhill mountain bike, my favorite food is bacon, and I broke my left arm twice.</p>
    </Col>
  </Row>
  </Container>        
    </div> );
}
 
export default Fact;