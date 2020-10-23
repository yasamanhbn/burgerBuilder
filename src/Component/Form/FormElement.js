import React from "react";
import classes from './FormElement.module.css'

const formElement = (props) => {
    let styled = [classes.Input]
    let type="text";
    if (props.isTouched && !props.isValid)
        styled.push(classes.Error)
    if(props.label==="password")
        type="password"
    return (
        <div className={classes.Elem}>
            <input className={styled.join(' ')} placeholder={props.label}
                   onChange={props.changeHandler}
                   type={type}
            />
        </div>
    )
}
export default formElement