import React, {Component} from "react";
import FormElement from "../../Component/Form/FormElement";
import Button from "../../Component/UI/Button/Button";
import classes from './auth.module.css'
import * as actions from '../../redux/actions/index'
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import {Redirect} from "react-router-dom";

class Auth extends Component {
    state = {
        controls: {
            email: {
                value: '',
                validation: {
                    required: true,
                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    isValid: false,
                },
                isTouched: false
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/,
                    isValid: false
                },
                isTouched: false
            },
        },
        validation: false,
        isSignIn:true
    }
    checkValidity = (textElement, rule) => {
        let isValid = true
        if (rule.required) {
            if (rule.pattern)
                isValid = rule.pattern.test(textElement);
        }
        return isValid;
    }
    changeHandler = (e, identifier) => {
        e.preventDefault();
        const updatedForm = {...this.state.controls}
        const input = {...updatedForm[identifier]};
        input.value = e.target.value;
        input.validation.isValid = this.checkValidity(e.target.value, input.validation);;
        input.isTouched = true;
        updatedForm[identifier] = input;
        let validation = true;
        for (let key in updatedForm) {
            validation = validation && updatedForm[key].validation.isValid
        }
        this.setState({
            controls: updatedForm,
            validation: validation
        });

    }
    //switch sign in method
    switchSignIn=()=>{
        this.setState(prevState=>{
            return {
                isSignIn: !prevState.isSignIn
            }
        })
    }
    //handel submit
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignIn);
    }

    render() {
        let inputArray = [];
        for (let input in this.state.controls) {
            inputArray.push({
                id: input,
                config: this.state.controls[input]
            })
        }
        //manage form panel
        const form = inputArray.map(elem => {
            return <FormElement label={elem.id}
                                key={elem.id}
                                changeHandler={(event) => this.changeHandler(event, elem.id)}
                                isTouched={elem.config.isTouched}
                                isValid={elem.config.validation.isValid}
            />
        })

        let submitForm = <form onSubmit={this.submitHandler}>
            {form}
            <Button title={'Submit'} disabled={!this.state.validation}/>
        </form>
        //add spinner to panel
        if(this.props.loading)
            submitForm = <Spinner animation="border" role="status" variant="success" size='lg'>
                <span className="sr-only">Loading...</span>
            </Spinner>
        //showing error
        let messageError=null;
        if(this.props.error) {
            messageError = (
                <p><b>{this.props.error.message}</b> </p>
            );
        }
        let authRedirect = null
        if(this.props.isAuth)
            if(this.props.building)
                authRedirect=<Redirect to="/checkout"/>
            else
                authRedirect=<Redirect to="/"/>
        return (
            <div className={classes.Auth}>
                {authRedirect}
                {messageError}
                {submitForm}
                <p  className={classes.SignIn} onClick={this.switchSignIn}>
                    SWITCH TO <b>{this.state.isSignIn?'Sign Up':'Sign In'}</b>
                </p>
            </div>
        )
    }
}

const maoStateToProps = state=>{
    return{
        loading:state.authReducer.loading,
        error:state.authReducer.error,
        isAuth:state.authReducer.token!==null,
        building:state.ingreReducer.price!==4
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,pass,signIn) => dispatch(actions.auth(email,pass,signIn))
    }
 }
export default connect(maoStateToProps,mapDispatchToProps)(Auth)