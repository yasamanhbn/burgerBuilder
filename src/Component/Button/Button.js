import React from "react";
import { Button } from 'react-bootstrap';
import classes from './Button.module.css'
const button = (props)=>{
    return(
        <Button size="lg" onClick={props.clicked}
                 className={classes.Button}>
            {props.title}
        </Button>
    )
}

export default button;