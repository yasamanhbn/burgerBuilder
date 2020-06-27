import React from "react";
import {NavLink} from 'react-router-dom'
import classes from './navigation-item.module.css'
const navigationItem = (props) => {
    return (
        <li className={classes.Li}>
            <NavLink to='/'>
                {props.children}
            </NavLink>
        </li>

    )
}

export default navigationItem