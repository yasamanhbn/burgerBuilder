import React from "react";
import NavigationItem from '../navigation-item/navigation-item'
import classes from './navigatiom.module.css'
const navigation = ()=>{
    return(
        <ul className={classes.Navigation}>
            <NavigationItem to='/'>burger builder</NavigationItem>
            <NavigationItem to='/members'>members</NavigationItem>
        </ul>
    )
}

export default navigation
