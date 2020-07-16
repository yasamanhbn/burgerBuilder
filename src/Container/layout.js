import React, {Component} from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import ToolBar from '../Component/navigationAndToolbar/Toolbar/toolbar'
import {Route, Switch} from "react-router";
import Orders from '../Component/Orders/orders'
import SideDrawer from '../Component/navigationAndToolbar/SideDrawer/sideDrawer'
import BackDrop from '../Component/UI/backDrop/backDrop'
import Checkout from "./Checkout/checkout";
class layout extends Component {
    state = {
        barEnabled: false
    }
    barClicked = () => {
        this.setState({barEnabled: true})
    }
    //for backDrop clicked
    onclick = () => {
        this.setState({barEnabled: false})
    }

    render() {
        return (
            <div>
                <div>
                    <SideDrawer showed={this.state.barEnabled}/>
                    <BackDrop showed={this.state.barEnabled} onClicked={this.onclick}/>
                </div>
                <ToolBar barClicked={this.barClicked}/>
                <Switch>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/orders' component={Orders}/>
                    <Route path='/' component={BurgerBuilder}/>
                </Switch>
            </div>
        )
    }
}

export default layout