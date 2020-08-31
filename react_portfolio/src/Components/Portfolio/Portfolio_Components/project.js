import React from 'react';

const Project = (props) => {
    return ( <div>
        <h5 style={{textAlign:"left"}}>{props.pro.name}</h5>
        <p style={{textAlign:"left"}}>{props.pro.description}</p>
        <a href="{props.pro.website}">{props.pro.website}</a>
        <br /> 
        <br />
    </div> );
}
 
export default Project;