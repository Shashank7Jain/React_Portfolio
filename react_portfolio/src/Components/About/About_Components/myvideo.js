import React from "react";
import styles from "styled-components";

const PStyles = styles.p`
    font-size: 20px;
`;
const Myvideo = (props) => {
  console.log(props.color);
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: props.color,
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div >
      <PStyles>
          This short video captures my personality, goals, and passions within
          my career.{" "}
        </PStyles>
        <br/>
        <video width="auto" height="600px" controls>
          <source src="about_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br />
      </div>
    </div>
  );
};

export default Myvideo;
