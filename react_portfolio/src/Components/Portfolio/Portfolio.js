import React, { Component } from 'react';
import Introduction from './Portfolio_Components/introduction';
import Projects from './Portfolio_Components/projects';
import Project from './Portfolio_Components/project';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div >
            <section><Introduction /></section>
            <section><Projects /></section>
        </div> );
    }
}
 
export default Portfolio;