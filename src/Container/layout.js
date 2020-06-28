import React from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import ToolBar from '../Component/navigationAndToolbar/Toolbar/toolbar'
import {Route} from "react-router";

const layout = () => {
    return (
        <div>
            <ToolBar/>
            <Route path='/'>
                <BurgerBuilder/>
            </Route>
        </div>
    )
}

export default layout