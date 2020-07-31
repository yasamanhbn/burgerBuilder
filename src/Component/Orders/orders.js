import React, {Component} from "react";
import axios from 'axios'
import {Row, Col, Container} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Order from './Order/order'
import classes from './Order/orders.module.css'
import {connect} from 'react-redux'
class Orders extends Component {
    state = {
        fetchOrders: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true})
        let fetchOrders = []
        const token = this.props.token
        axios.get('https://burger-builder-23f15.firebaseio.com/orders.json?auth='+token)
            .then(respond=>{
                let num = 1
                for (let key in respond.data) {
                    fetchOrders.push({
                        ...respond.data[key],
                        id: num
                    });
                    num++;
                }
                this.setState({
                    fetchOrders: fetchOrders,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        let orders = (this.state.fetchOrders).map(order => {
            return <Row key={order.id}>
                <Col>
                    <Order
                        ingredients={order.ingredients}
                        price={order.price}
                        data={order.orderData}
                    />
                </Col>
            </Row>

        })
        if (this.state.loading)
            orders = <Spinner animation="grow" role="status" variant="primary" className={classes.Spinner}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        return (
            <Container>
                <p className={classes.OrderP}>YOUR ORDERS</p>
                <div className='d-flex flex-row flex-wrap justify-content-around'>
                    {orders}
                </div>
            </Container>
        )
    }
}
const mapStateToProps = state=>{
    return{
        token:state.authReducer.token
    }
}
export default connect(mapStateToProps)(Orders)