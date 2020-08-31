import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const Technical = (props) => {
    return ( <div style={{height:"600px", margin:"100px"}}>
        <h1>My Technical Experience</h1>
        <p>
            Worked with these languages 
        </p>
        <div style={{margin:"50px"}}>
            <Container>
                <Row>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <div style={{marginTop:'10px'}}>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    </div>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                </Row>
                <br/>
                <Row>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                    <Col><img src="favicon-32x32.png" width="100px" height="100px" alt="MongoDB" /></Col>
                </Row>
            </Container>
        </div>
    </div> );
}
 
export default Technical;