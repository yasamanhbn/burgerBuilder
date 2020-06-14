import React, {Component} from "react";
import classes from './burger.module.css'
import BurgerIngredient from './BurgerIngredient/burgerIngredient'
class Burger extends Component{
    render() {
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type='BreadTop'/>
                <BurgerIngredient type='Meat'/>
                <BurgerIngredient type='Cheese'/>
                <BurgerIngredient type='Salad'/>
                <BurgerIngredient type='Bacon'/>
                <BurgerIngredient type='BreadBottom'/>
            </div>
        );
    }
}

export default Burger;