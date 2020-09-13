import React from 'react';
import ReactTypingEffect from 'react-typing-effect';



const TypingEffect = (props) => {
    return ( 
        <div style={{padding:"100px"}}>
        <ReactTypingEffect
    text={props.text}
        speed="200"
        eraseDelay="100"
        typingDelay="200"
        className="typing-styles"
      /> 
      </div>);
}
 
export default TypingEffect;