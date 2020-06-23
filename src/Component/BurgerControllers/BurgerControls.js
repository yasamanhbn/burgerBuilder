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
            {controls.map((index) =>
                <BurgerController
                    clicked={()=>props.clicked(index.label)}
                    label={index.label}
                    key={index.label}
                />
            )}
        </div>
    )
}


export default BurgerControls