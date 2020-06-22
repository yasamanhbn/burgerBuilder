import React from "react";
import BurgerController from "./BurgerController/burgerController";
import classes from './BurgerControls.module.css'

const controls = [
    {label: 'salad'},
    {label: 'cheese'},
    {label: 'meat'},
    {label: 'bacon'}
]
const BurgerControls = () => {
    return (
        <div className={classes.BurgerControllers}>
            {controls.map((index) =>
                <BurgerController
                    label={index.label}
                    key={index.label}
                />
            )}
        </div>
    )
}


export default BurgerControls