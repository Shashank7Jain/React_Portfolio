import React, { Component } from 'react';

import TypingEffect from "../../typing-effect";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <section>
            <TypingEffect text={["Coming up soon."]}/>
        </section>
           );
    }
}
 
export default Blog;