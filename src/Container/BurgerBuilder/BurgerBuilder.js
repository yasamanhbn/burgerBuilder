import React, {Component} from "react";
import Burger from "../../Component/Burger/burger";
import BurgerControls from "../../Component/BurgerControllers/BurgerControls";
import {connect} from 'react-redux'
import OrderSummery from '../../Component/OrderSummery/orderSummery/orderSummery'
import * as actions from '../../redux/actions/actions'
import OrderSummeryPanel from "../../Component/OrderSummery/orderSummeryPanel";
import {withRouter} from "react-router-dom";
import axios from 'axios'
import withErrorHandling from "../withErrorHandler/withErrorHandling";

class BurgerBuilder extends Component {
    state = {
        purchaseOrder: false
    }
    purchaseHandler = () => {
        this.setState({purchaseOrder: true})
    }
    backdropCanceled = () => {
        this.setState({purchaseOrder: false})
    }
    purchaseContinued = () => {
        this.props.history.push('/checkout');
    }

    render() {

        let disabledInfo = {
            ...this.props.ingredients
        }
        let sum = 0;
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] ? 1 : 0;
            sum += disabledInfo[key];
        }
        const orderSummery = <OrderSummery ingredients={this.props.ingredients}
                                           showed={this.state.purchaseOrder}
                                           canceled={this.backdropCanceled}
                                           price={this.props.price}
                                           purchaseContinued={this.purchaseContinued}
        />
        return (
            <div>
                <div>
                    <Burger ingredients={this.props.ingredients}/>
                    <OrderSummeryPanel showed={this.state.purchaseOrder}
                                       backDropCanceled={this.backdropCanceled}>
                        {orderSummery}
                    </OrderSummeryPanel>
                    <BurgerControls onIncrement={this.props.onIncrement}
                                    onDecrement={this.props.onDecrement}
                                    disabledInfo={disabledInfo}
                                    price={this.props.price}
                                    orderDisabled={sum}
                                    purchaseHandler={this.purchaseHandler}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.price
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (type) => dispatch({type: actions.ADD_INGREDIENT, ingredientType: type}),
        onDecrement: (type) => dispatch({type: actions.REMOVE_INGREDIENT, ingredientType: type})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandling(BurgerBuilder, axios)))