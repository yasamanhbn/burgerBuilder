import React from "react";
import Navigation from '../navigation/navigation'
import classes from './sideDrawer.module.css'

const sideDrawer = (props) => {
    return (
        props.showed?
    <div className={classes.SideDrawer}>
        <Navigation/>
    </div> : null
)
}

export default sideDrawer