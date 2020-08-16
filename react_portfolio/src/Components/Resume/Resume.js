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
                <Technologies/>
                <Education />
                <Experiences />
                <Hireme/>
        </div> );
    }
}
 
export default Resume;