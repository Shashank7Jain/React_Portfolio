import React, { Component } from 'react';
import Technologies from './Resume_Compoents/technologies';
import Education from './Resume_Compoents/education';
import Experience from './Resume_Compoents/Experience';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
                <Technologies/>
                <Education />
                <Experience />
        </div> );
    }
}
 
export default Resume;