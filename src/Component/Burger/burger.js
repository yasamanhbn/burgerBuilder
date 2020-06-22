import React from "react";
import classes from './burger.module.css'
import BurgerIngredient from './BurgerIngredient/burgerIngredient'
const burger=(props)=>{
    let ingredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( (_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    
        if(ingredients.length===0)
            ingredients = <h2>please choose an ingredient</h2>
    return (
            <div className={classes.Burger}>
                <BurgerIngredient type='BreadTop'/>
                {ingredients}
                <BurgerIngredient type='BreadBottom'/>
            </div>
        );
}

export default burger;