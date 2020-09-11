import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import css from "./App.css";


const TypingEffect = () => {
    return ( 
        <div style={{padding:"100px"}}>
        <ReactTypingEffect
    text={["I'm Shashank Jain","Welcome to my portfolio!"]}
        speed="400"
        eraseDelay="300"
        typingDelay="300"
        className="typing-styles"
      /> 
      </div>);
}
 
export default TypingEffect;