import React from "react";
import classes from './orderSummery.module.css'
const orderSummeryPanel = (props)=>{
    return(
            <div className={classes.Panel}
                style={{
                transition:'all 1s',
                transform: props.showed ?'translateY(0)':'translateY(-300%)',
                zIndex: '500'
            }}>
                {props.children}
            </div>
    )
}
export default orderSummeryPanel;