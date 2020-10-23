import React from "react";
import NavigationItem from '../navigation-item/navigation-item'
import classes from './navigatiom.module.css'
const navigation = (props)=>{
    console.log(props.isAuth)
    return(
        <ul className={classes.Navigation}>
            <NavigationItem to='/'>burger builder</NavigationItem>
            {props.isAuth?<NavigationItem to='/orders'>orders</NavigationItem>:null}
            {props.isAuth?<NavigationItem to='/logout'>logout</NavigationItem>
                :<NavigationItem to='/Auth'>Authenticate</NavigationItem>
            }
        </ul>
    )
}

export default navigation
