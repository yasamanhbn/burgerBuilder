import React from "react";
import classes from './backDrop.module.css'

const backDrop = (props)=>{
    return(
        props.showed ? <div className={classes.backDrop} onClick={props.onClicked}/>:null
    )
}

export default backDrop