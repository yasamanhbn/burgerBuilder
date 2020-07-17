import React from "react";
import classes from './order.module.css'
const ingredients={
    salad:'salad',
    meat : 'meat',
    bacon: 'bacon',
    cheese : 'cheese'
}
const order =(props)=>{
    let ingre = Object.keys(ingredients).map(ig=>{
        return <p key={ig}> <b>{ig}</b> : {props.ingredients[ig]}</p>
    })
    return(
        <div className={classes.Panel}>
            <p><b>username </b> : {props.data['userName']}</p>
            {ingre}
            <p><b>price </b>: {props.price}</p>
            <p><b>email</b>: {props.data['email']}</p>
        </div>
    )
}
export default order