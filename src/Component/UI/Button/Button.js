import React from "react";
import classes from './Button.module.css'
const button = (props)=>{
    return(
        <button onClick={props.clicked}
                disabled={props.disabled}
                 className={classes.Button}>
            {props.title}
        </button>
    )
}

export default button;