import React, { Component } from 'react';
import Passion from './Home_Components/passion';
import Technical from './Home_Components/technical_exp';
import Myvideo from '../About/About_Components/myvideo';
import Instagram from '../About/About_Components/instagramfeed';
import Help from './Home_Components/help'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Passion />
            <Technical />
            < Myvideo />
            < Help />
            < Instagram />
        </div> );
    }
}
 
export default Home;