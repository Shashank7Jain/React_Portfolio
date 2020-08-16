import React, { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import Experience from './experience'
import resume_data from '../../../data/resume_data.json';

class Experiences extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   
        <div style={{ marginTop: "50px", marginBottom: "50px", textAlign:"left" }}>
        <Container>
          <Row>
            <Col xs={4}>
             <h5> Experience</h5>
            </Col>
            <Col>
                {resume_data.experiences.map((exp,index)=>{
                    return <Experience exp={exp}/>
                })}
            </Col>
          </Row>
        </Container> 
        </div>);
    }
}

 
export default Experiences;