import React, { Component } from 'react';
import ReactOut from './Contact_Components/reactout';
import Location from './Contact_Components/location'

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