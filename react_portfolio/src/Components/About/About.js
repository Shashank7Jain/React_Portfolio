import React, { Component } from 'react';
import Fact from './About_Components/facts';
import Myvideo from './About_Components/myvideo';
import Instagram from './About_Components/instagramfeed';
import WhatIDid from './About_Components/what_i_did';
import TypingEffect from "../../typing-effect";


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
             <section>
                <TypingEffect text={["My Passion & Personality."]}/>
            </section>
            <section><Fact/></section>
            <section><Myvideo color={"white"} /></section>
            <section><Instagram /></section>
           <section><WhatIDid/></section>
        </div> );
    }
}
 
export default About;