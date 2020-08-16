import React from 'react';

const Experience = (props) => {
    return ( 
        <div>
            <p> <b>{props.exp.role.toUpperCase()}</b> {props.exp.start_date} - {props.exp.end_date}</p>
    <p>{props.exp.emp_type}, <a href="{props.exp.website}">{props.exp.company}</a>, {props.exp.city} </p>

    <p>{props.exp.description}</p>
<br/>
        </div>
     );
}
 
export default Experience;

