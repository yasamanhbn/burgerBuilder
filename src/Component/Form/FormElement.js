import React from "react";
import classes from './FormElement.module.css'
const formElement = (props)=>{
    return(
        <div className={classes.Elem}>
            <label className={classes.label}>{props.label}</label>
            <input className={classes.Input}/>
        </div>
    )
}
export default formElement