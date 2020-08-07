import React, { Component } from 'react';
import ReactOut from './reactout';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1>
                Hello! I am from the Contact.js
            </h1>
            <ReactOut/>
        </div> );
    }
}
 
export default Contact;