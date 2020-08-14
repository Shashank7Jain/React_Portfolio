import React, { Component } from 'react';
import ReactOut from './reactout';
import Location from './location'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <ReactOut></ReactOut>
            <Location></Location>
        </div> );
    }
}
 
export default Contact;