import React from "react";
import Button from '../../Button/Button'
import classes from './burgerController.module.css'
const burgerController=(props)=>{
        return (
            <div>
                <div className={classes.label}>{props.label}</div>
                <div className={classes.BurgerController}>
                    <Button title='less' clicked={props.clicked}/>
                    <Button title='more' clicked={props.clicked}/>
                </div>
            </div>
        )
}

export default burgerController;