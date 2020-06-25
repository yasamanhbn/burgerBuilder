import React from "react";
import Button from '../../UI/Button/Button'
import classes from './burgerController.module.css'
const burgerController=(props)=>{
        return (
            <div>
                <div className={classes.label}>{props.label}</div>
                <div className={classes.BurgerController}>
                    <Button title='less' clicked={props.onDecrement}
                            disabled={props.disabledInfo[props.label]}/>
                    <Button title='more' clicked={props.onIncrement}/>
                </div>
            </div>
        )
}

export default burgerController;