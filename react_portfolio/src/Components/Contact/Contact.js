import React, { Component } from 'react';
import ReactOut from './Contact_Components/reactout';
import Location from './Contact_Components/location';
import TypingEffect from "../../typing-effect";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
             <section>
                <TypingEffect text={["Connect with me Today."]}/>
            </section>
            <section>
                <ReactOut></ReactOut>
            </section>
            <section>
                <Location></Location>
            </section>
        </div> );
    }
}
 
export default Contact;