import React from "react";
import BurgerController from "./BurgerController/burgerController";
import classes from './BurgerControls.module.css'
import Button from '../UI/Button/Button'
import {Col, Container, Row} from "react-bootstrap";

const controls = [
    {label: 'salad'},
    {label: 'cheese'},
    {label: 'meat'},
    {label: 'bacon'}
]
const BurgerControls = (props) => {
    return (
        <div className={classes.BurgerControllers}>
            <p>PRICE IS {(props.price).toFixed(2)}</p>
            <Container>
                <div className='d-flex flex-row flex-wrap  justify-content-around'>
                    {controls.map((index) =>
                        <Row   key={index.label}>
                            <Col>
                                <BurgerController
                                    onIncrement={() => props.onIncrement(index.label)}
                                    onDecrement={() => props.onDecrement(index.label)}
                                    label={index.label}
                                    disabledInfo={props.disabledInfo}
                                />
                            </Col>
                        </Row>
                    )}
                </div>
            </Container>
            <Button disabled={!props.orderDisabled}
                    clicked={props.purchaseHandler}
                    className={classes.ORDER} title='ORDER'/>
        </div>

    )
}


export default BurgerControls