import React, { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';

import Experience from './experience'
import resume_data from '../../../data/resume_data.json';


const H5Styles = styled.h5`
font-size:24px;
font-weight: 400;
font-family:auto;
text-align: left  ;
`;
class Experiences extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   
        <div style={{ padding:"50px 100px", textAlign:"left", backgroundColor: "#f7f7f75e " }}>
        <Container fluid>
          <Row>
            <Col xs={4}>
             <H5Styles> Experience</H5Styles>
            </Col>
            <Col  xs={8}>
                {resume_data.experiences.map((exp,index)=>{
                    return <Experience exp={exp} key={index}/>
                })}
            </Col>
          </Row>
        </Container> 
        </div>);
    }
}

 
export default Experiences;