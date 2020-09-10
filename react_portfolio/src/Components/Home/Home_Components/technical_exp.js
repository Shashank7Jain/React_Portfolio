import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import styled from "styled-components";

const ImgStyles = styled.img`
width: 100%; 
height: 100%; 
object-fit: contain;
`;


const Technical = (props) => {
    return ( <div style={{height:"auto", padding:"100px",}}>
        <h1 style={{fontSize:"50px"}}>My Technical Experience</h1>
        <p style={{fontSize:"25px"}}>
            Worked with these languages 
        </p>
        <div style={{margin:"50px"}}>
            <Container>
                <Row>
                    <Col xs lg={2}><ImgStyles src="logo512.png" width="150px" height="150px" alt="ReactJS" /></Col>
                    <Col xs lg={2}><ImgStyles src="angular_logo.png" width="150px" height="150px" alt="Angular" /></Col>
                    <Col xs lg={2}><ImgStyles src="spring_logo.png" width="150px" height="150px" alt="Spring-Frameworks" /></Col>
                    <Col xs lg={2}><ImgStyles src="nodejs_logo.png" width="150px" height="150px" alt="Nodejs" /></Col>
                    <Col xs lg={2}><ImgStyles src="html_css_js.png" width="150px" height="150px" alt="HTML_CSS_JS" /></Col>
                    <Col xs lg={2}><ImgStyles src="scss_logo.png" width="150px" height="150px" alt="SCSS" /></Col>
                </Row>
                <br/>
                <Row>
                    <Col xs lg={2}><ImgStyles src="github_logo.png" width="150px" height="150px" alt="GitHub" /></Col>
                    <Col xs lg={2}><ImgStyles src="pyspark_logo.jpeg" width="150px" height="150px" alt="Pyspark" /></Col>
                    <Col xs lg={2}><ImgStyles src="tableau_logo.png" width="150px" height="150px" alt="Tableau" /></Col>
                    <Col xs lg={2}><ImgStyles src="mongodb_logo.jpg" width="150px" height="150px" alt="MongoDB" /></Col>
                    <Col xs lg={2}><ImgStyles src="postgresql_logo.jpg" width="150px" height="150px" alt="PostgreSQL" /></Col>
                    <Col xs lg={2}><ImgStyles src="agile_logo.jpg" width="150px" height="150px" alt="Agile" /></Col>
                </Row>
            </Container>
        </div>
    </div> );
}
 
export default Technical;