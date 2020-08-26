import React, { Component } from 'react';
import Introduction from './Portfolio_Components/introduction';
import Projects from './Portfolio_Components/projects';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div >
            <Introduction/>
            <Projects />
        </div> );
    }
}
 
export default Portfolio;