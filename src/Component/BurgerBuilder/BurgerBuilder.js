import React, {Component} from "react";
import Burger from "../Burger/burger";
import BurgerControls from "../BurgerControllers/BurgerControls";
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/actions'
class BurgerBuilder extends Component{
    render() {
        let disabledInfo = {
            ...this.props.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] ? 0 : 1;
        }
        return(
            <div>
                <Burger ingredients={this.props.ingredients}/>
                <BurgerControls onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                disabledInfo={disabledInfo}
                                price={this.props.price}
                />
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        ingredients: state.ingredients,
        price : state.price
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onIncrement :(type)=>dispatch({type:actions.ADD_INGREDIENT ,ingredientType:type}),
        onDecrement :(type)=>dispatch({type:actions.REMOVE_INGREDIENT,ingredientType:type})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder)