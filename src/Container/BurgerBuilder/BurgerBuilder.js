import React, {Component} from "react";
import Burger from "../../Component/Burger/burger";
import BurgerControls from "../../Component/BurgerControllers/BurgerControls";
import {connect} from 'react-redux'
import OrderSummery from '../../Component/OrderSummery/orderSummery/orderSummery'
import * as burgerBuilderActions from '../../redux/actions/index'
import OrderSummeryPanel from "../../Component/OrderSummery/orderSummeryPanel";
import {withRouter} from "react-router-dom";

class BurgerBuilder extends Component {
    state = {
        purchaseOrder: false
    }
    purchaseHandler = () => {
        if(this.props.isAuth)
            this.setState({purchaseOrder: true})
        else
            this.props.history.push("/Auth");
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
                                    isAuth={this.props.isAuth}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingreReducer.ingredients,
        price: state.ingreReducer.price,
        isAuth:state.authReducer.token!==null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (type) => dispatch(burgerBuilderActions.addIngredient(type)),
        onDecrement: (type) => dispatch(burgerBuilderActions.removeIngredient(type))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder))