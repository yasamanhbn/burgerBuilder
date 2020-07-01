import React from "react";
import BurgerController from "./BurgerController/burgerController";
import classes from './BurgerControls.module.css'
import Button from '../UI/Button/Button'

const controls = [
    {label: 'salad'},
    {label: 'cheese'},
    {label: 'meat'},
    {label: 'bacon'}
]
const BurgerControls = (props) => {
    return (
        <div className={classes.BurgerControllers}>
            <p>PRICE IS {(props.price).toFixed(2)}</p>
            <div className={classes.burgerBuilder}>
                {controls.map((index) =>
                    <BurgerController
                        onIncrement={() => props.onIncrement(index.label)}
                        onDecrement={() => props.onDecrement(index.label)}
                        label={index.label}
                        key={index.label}
                        disabledInfo={props.disabledInfo}
                    />
                )}
            </div>
            <Button disabled={!props.orderDisabled}
                    clicked={props.purchaseHandler}
                    className={classes.ORDER} title='ORDER'/>
        </div>

    )
}


export default BurgerControls