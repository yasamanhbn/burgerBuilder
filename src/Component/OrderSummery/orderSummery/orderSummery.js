import React from "react";
import classes from './orderSummery.module.css'
const orderSummery = (props)=>{
    let orders=Object.keys(props.ingredients).map(igKey=>{
            return(
                <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
            )
        });
    return(
        <div className={classes.orderSummery}>
            <h2>YOUR ORDER</h2>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {orders}
            </ul>
            <strong>Total price: {props.price.toFixed(2)}</strong>
            <p>Continue to Checkout?</p>
        </div>
    )
}

export default orderSummery;