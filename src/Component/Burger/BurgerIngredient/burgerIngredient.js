import React from "react";
import classes from './burgerIngredient.module.css'

const burgerIngredient = (props) => {
    let ingredient;
    switch (props.type) {
        case ('BreadBottom'):
            ingredient = <div className={classes.BreadBottom}/>
            break;
        case ('BreadTop'):
            ingredient = <div className={classes.BreadTop}/>
            break;
        case ('Salad'):
            ingredient = <div className={classes.Salad}/>
            break;
        case ('Bacon'):
            ingredient = <div className={classes.Bacon}/>
            break;
        case ('Cheese'):
            ingredient = <div className={classes.Cheese}/>
            break;
        case ('Meat'):
            ingredient = <div className={classes.Meat}/>
            break;
        default:
            ingredient = null;
    }
    return ingredient;
}

export default burgerIngredient;

