import React from "react";
import classes from './toolbar.module.css'
import Navigation from '../navigation/navigation'
const toolbar = (props) => {

    return (
        <div className={classes.Toolbar}>
            <div className={classes.Bar} onClick={props.barClicked}>
                <i className="fa fa-bars"/>
            </div>
            <div className={classes.Navigation}>
                <Navigation isAuth={props.isAuth}/>
            </div>
        </div>
    )
}

export default toolbar