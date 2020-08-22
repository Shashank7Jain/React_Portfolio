import React, { Component } from 'react';
import Fact from './About_Components/facts';
import Myvideo from './About_Components/myvideo';
import Instagram from './About_Components/instagramfeed';
import WhatIDid from './About_Components/what_i_did';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Fact/>
            <Myvideo />
            <Instagram />
            <WhatIDid />
        </div> );
    }
}
 
export default About;