import React from "react";
import classes from './scBtn.module.css';
const scBtn = (props)=>{
    return(
        <div>
            <button  style={{color:'red'}} className={classes.BTN}
                     onClick={props.canceled}
            >CANCELED</button>
            <button  style={{color:'green'}}
                     className={classes.BTN} onClick={props.purchaseContinued}>SUCCEED</button>
        </div>
    )

}
export default scBtn