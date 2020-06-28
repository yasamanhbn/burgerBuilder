import React from "react";
import classes from './orderSummery.module.css'
const orderSummery = (props)=>{
    let orders=Object.keys(props.ingredients).map(igKey=>{
            return(
                <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
            )
        });
    return(
        <div>
            <h2>YOUR ORDER</h2>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {orders}
            </ul>
            <strong>Total price: {props.price.toFixed(2)}</strong>
            <p>Continue to Checkout?</p>
            <div>
                <button  style={{color:'green'}}
                        className={classes.BTN}>SUCCEED</button>
                <button  style={{color:'red'}} className={classes.BTN}
                         onClick={props.canceled}
                >DANGER</button>
            </div>
        </div>
    )
}

export default orderSummery;