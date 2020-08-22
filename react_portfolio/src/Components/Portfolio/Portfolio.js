import React, { Component } from 'react';
import Introduction from './Portfolio_Components/introduction';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Introduction/>
        </div> );
    }
}
 
export default Portfolio;