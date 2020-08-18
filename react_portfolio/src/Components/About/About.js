import React, { Component } from 'react';
import Fact from './About_Components/facts';
import Myvideo from './About_Components/myvideo';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Fact/>
            <Myvideo />
        </div> );
    }
}
 
export default About;