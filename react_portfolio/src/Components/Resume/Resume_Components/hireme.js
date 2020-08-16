import React from 'react';
import styles from 'styled-components';
import { useHistory } from "react-router-dom";

//const history = useHistory();


const DivStyles = styles.div`
    height :500px;
    background: #fffff;
    margin-right:80px;
    margin-left:80px`;
const contactButton =()=>
{
    // let path = '/contact';
    // History.push(path)
    console.log("need to work on the contact button");
}
const Hireme = (props) => {
    return ( 
        <DivStyles >
            <h1>Hire me today!</h1>
            <br/>
            <br/>
            <br/>
            <h4>Now that you know what I did and what I might do for you, feel free to 
                reach out and start a conversation. For committed company,  I really love to be a part of their success.</h4>
            <br/>
            <br/>
            <br/>
            <button type='button' onClick={contactButton}>CONTACT ME</button>
        </DivStyles>
     );
}
 
export default Hireme;