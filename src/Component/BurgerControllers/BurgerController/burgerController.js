import React from "react";
import Button from '../../Button/Button'
import classes from './burgerController.module.css'
const burgerController=(props)=>{
        return (
            <div>
                <div className={classes.label}>{props.label}</div>
                <div className={classes.BurgerController}>
                    <Button title='less' clicked={props.onDecrement}/>
                    <Button title='more' clicked={props.onIncrement}/>
                </div>
            </div>
        )
}

export default burgerController;