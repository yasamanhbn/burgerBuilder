import React from "react";
import classes from './orderSummery.module.css'
import BackDrop from '../UI/backDrop/backDrop'
const orderSummeryPanel = (props)=>{
    return(
        <div>
            <BackDrop showed={props.showed} onClicked={props.backDropCanceled}/>
            <div className={classes.Panel}
                style={{
                transition:'all 1s',
                transform: props.showed ?'translateY(0)':'translateY(-650%)',
                zIndex: '500'
            }}>
                {props.children}
            </div>
        </div>
    )
}
export default orderSummeryPanel;