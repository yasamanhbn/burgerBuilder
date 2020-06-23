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
        case ('salad'):
            ingredient = <div className={classes.Salad}/>
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}/>
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}/>
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}/>
            break;
        default:
            ingredient = null;
    }
    return ingredient;
}

export default burgerIngredient;

