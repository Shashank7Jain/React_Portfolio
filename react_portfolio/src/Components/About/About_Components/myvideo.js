import React from 'react';

const Myvideo = (props) => {
    return ( <div style={{height:"600px", margin:"100px"}}>
        <video width="900" height="600" controls>
            <source src="about_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <br/>
        <p>This short video captures my personality, goals, and passions within my career. </p>
    </div> );
}
 
export default Myvideo;