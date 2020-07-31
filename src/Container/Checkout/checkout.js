import React, {Component} from "react";
import {connect} from 'react-redux'
import {Route, withRouter} from "react-router";
import Burger from '../../Component/Burger/burger'
import ScBtn from '../../Component/UI/SucceedOrCancledBtn/SCBtn'
import Form from '../../Component/Form/contactData'

class Checkout extends Component {
    canceledHandler = () => {
        this.props.history.goBack();
    }
    succeedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <div>
                    <Burger ingredients={this.props.ingredients}/>
                    <ScBtn canceled={this.canceledHandler} purchaseContinued={this.succeedHandler}/>
                </div>
                <Route path={this.props.match.path + '/contact-data'}
                    render={()=>(<Form ingredients={this.props.ingredients} price={this.props.price}/>)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingreReducer.ingredients,
        price: state.ingreReducer.price
    }
}
export default connect(mapStateToProps)(withRouter(Checkout))