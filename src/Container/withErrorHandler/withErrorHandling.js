import React, {Component} from "react";
import OrderSummeryPanel from '../../Component/OrderSummery/orderSummeryPanel'
const withErrorHandling = (WrapComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        componentDidMount() {
            axios.interceptors.request.use(req=>{
                this.setState({error:null})
            })
            axios.interceptors.response.use(null,error=>{
                this.setState({
                    error:error
                })
            })
        }
        onClickedError=()=>{
            this.setState({
                error:null
            })
        }
        render() {
            return (
                <div>
                    <OrderSummeryPanel showed={this.state.error} backDropCanceled={this.onClickedError}>
                        {this.state.error ? this.state.error.message : null}
                    </OrderSummeryPanel>
                    <WrapComponent {...this.props}/>
                </div>
            );
        }

    }
}

export default withErrorHandling