import React from "react";
import classes from './FormElement.module.css'

const formElement = (props) => {
    let styled = [classes.Input]
    if (props.isTouched && !props.isValid)
        styled.push(classes.Error)

    return (
        <div className={classes.Elem}>
            <input className={styled.join(' ')} placeholder={props.label}
                   onChange={props.changeHandler}
            />
        </div>
    )
}
export default formElement