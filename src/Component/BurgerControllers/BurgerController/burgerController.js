import React from "react";
import Button from '../../Button/Button'
import classes from './burgerController.module.css'
const burgerController=(props)=>{
        return (
            <div>
                <div className={classes.Div}>
                    <label className={classes.label}>{props.label}</label>
                </div>
                <div className={classes.Div}>
                    <Button title='less'/>
                    <Button title='more'/>
                </div>
            </div>
        )
}

export default burgerController;