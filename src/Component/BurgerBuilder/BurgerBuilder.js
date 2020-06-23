import React, {Component} from "react";
import Burger from "../Burger/burger";
import BurgerControls from "../BurgerControllers/BurgerControls";
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/actions'
class BurgerBuilder extends Component{
    render() {
        return(
            <div>
                <Burger ingredients={this.props.ingredients}/>
                <BurgerControls onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}/>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        ingredients: state.ingredients
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onIncrement :(type)=>dispatch({type:actions.ADD_INGREDIENT ,ingredientType:type}),
        onDecrement :(type)=>dispatch({type:actions.REMOVE_INGREDIENT,ingredientType:type})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder)