import React from 'react';
import "./Mybutton.css"

const Mybutton = (props) => {
    return (
        <button onClick={props.onClick} style={{background:`${props.color}`}} className='myBtn'>{props.children}</button>
    );
};

export default Mybutton;