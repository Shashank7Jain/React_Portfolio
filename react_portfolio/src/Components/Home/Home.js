import React, { Component } from "react";
import Passion from "./Home_Components/passion";
import Technical from "./Home_Components/technical_exp";
import Myvideo from "../About/About_Components/myvideo";
import Instagram from "../About/About_Components/instagramfeed";
import Help from "./Home_Components/help";
import TypingEffect from "../../typing-effect";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section>
        <TypingEffect text={["I'm Shashank Jain","My Life Runs On Codes!"]}/>
        </section>
        <section>
          <Passion />
        </section>
        <section>
          <Myvideo color={"white"}/>
        </section>
        <section>
          <Technical />
        </section>
        
        <section>
          <Help />
        </section>
        <section>
          <Instagram />
        </section>
      </div>
    );
  }
}

export default Home;
