import React, { Component } from 'react';
import Introduction from './Portfolio_Components/introduction';
import Projects from './Portfolio_Components/projects';
import TypingEffect from "../../typing-effect";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div >
             <section>
        <TypingEffect text={["What I did so far!"]}/>
        </section>
            <section><Introduction /></section>
            <section><Projects /></section>
        </div> );
    }
}
 
export default Portfolio;