import React, {Component} from "react";
import Burger from "../Burger/burger";
import BurgerControls from "../BurgerControllers/BurgerControls";
class BurgerBuilder extends Component{
    render() {
        let ingredient={
            Salad:0,
            Bacon:0,
            Cheese:0,
            Meat:0
        }
        return(
            <div>
                <Burger ingredients={ingredient}/>
                <BurgerControls/>
            </div>
        )
    }

}

export default BurgerBuilder