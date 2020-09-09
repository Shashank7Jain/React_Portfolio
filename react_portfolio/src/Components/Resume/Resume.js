import React, { Component } from 'react';
import Technologies from './Resume_Components/technologies';
import Education from './Resume_Components/education';
import Experiences from './Resume_Components/experiences';
import Hireme from './Resume_Components/hireme';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
                <section><Technologies/></section>
                <section><Education/></section>
                <section><Experiences/></section>
                <section><Hireme/></section>
        </div> );
    }
}
 
export default Resume;