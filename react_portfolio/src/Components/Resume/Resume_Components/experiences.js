import React, { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';

import Experience from './experience'
import resume_data from '../../../data/resume_data.json';

const H5Styles = styled.h5`
  font-size: 24px;
  font-weight: 400;
`;
class Experiences extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   
        <div style={{ marginTop: "50px", marginBottom: "50px", textAlign:"left", backgroundColor: "#fffdfc" }}>
        <Container>
          <Row>
            <Col xs={4}>
             <H5Styles> Experience</H5Styles>
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