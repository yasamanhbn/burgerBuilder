import React from "react";
import BurgerController from "./BurgerController/burgerController";
import classes from './BurgerControls.module.css'

const controls = [
    {label: 'salad'},
    {label: 'cheese'},
    {label: 'meat'},
    {label: 'bacon'}
]
const BurgerControls = (props) => {
    return (
        <div className={classes.BurgerControllers}>
            <p>PRICE IS {props.price}</p>
            {controls.map((index) =>
                <BurgerController
                    onIncrement={()=>props.onIncrement(index.label)}
                    onDecrement={()=>props.onDecrement(index.label)}
                    label={index.label}
                    key={index.label}
                    disabledInfo={props.disabledInfo}
                />
            )}
        </div>
    )
}


export default BurgerControls