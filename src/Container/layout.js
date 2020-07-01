import React, {Component} from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import ToolBar from '../Component/navigationAndToolbar/Toolbar/toolbar'
import {Route,Switch} from "react-router";
import Members from '../Component/Members/members'
import SideDrawer from '../Component/navigationAndToolbar/SideDrawer/sideDrawer'
import BackDrop from '../Component/UI/backDrop/backDrop'
class layout extends Component {
    state={
        barEnabled : false
    }
    barClicked = ()=>{
        this.setState({barEnabled:true})
    }
    //for backDrop clicked
    onclick=(props)=>{
        this.setState({barEnabled:false})
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
                    <Route path='/' exact>
                        <BurgerBuilder/>
                    </Route>
                    <Route path='/members'>
                        <Members/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default layout