import React, {Component} from "react";
import FormElement from './FormElement'
import classes from './Form.module.css'
import Button from '../UI/Button/Button'
import axios from 'axios'
import {withRouter} from "react-router";
import Spinner from '../UI/Spinner/Spinner'

class Form extends Component {
    state = {
        form: {
            userName: {
                value: '',
                validation: {
                    required: true,
                    maxLength: 10,
                    minLength: 3,
                    isValid: false
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
            email: {
                value: '',
                validation: {
                    required: true,
                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    isValid: false,
                },
                isTouched: false
            },
            phone: {
                value: '',
                validation: {
                    required: true,
                    pattern: /^[0-9\\-\\+]{9,15}$/,
                    isValid: false
                },
                isTouched: false
            }
        },
        Validation: false,
        signIn: true,
        loading:false
    }
    submitHandler = () => {
        this.setState({loading:true});
        if(this.state.signIn) {
            this.props.history.push('/');
            return
        }
        const formData = {};
        for (let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }
        let data = {
            orderData:formData,
            ingredients:this.props.ingredients,
            price:(this.props.price).toFixed(2)
        }
        axios.post('https://burger-builder-23f15.firebaseio.com/orders.json', data)
            .then(respond => {
                this.setState({loading:false});
                this.props.history.push('/');
            }).catch(error =>
            this.setState({loading:false})
    )
}

signUpClicked = () => {
    this.setState({signIn: false});
}
checkValidity = (textElement, rule) => {
    let isValid = true
    if (rule.required) {
        if (rule.maxLength)
            isValid = textElement.length <= rule.maxLength;
        if (rule.minLength)
            isValid = textElement.length >= rule.minLength;
        if (rule.pattern)
            isValid = rule.pattern.test(textElement);
    }
    return isValid;

}
signInChangeHandler = (e, identifier) => {
    let totalValidation = false;
    let validation = e.target.value !== '';
    let updatedForm = {...this.state.form};
    let input = {...updatedForm[identifier]};
    input.value = e.target.value;
    input.validation.isValid = validation;
    updatedForm[identifier] = input;
    if (updatedForm["userName"].validation.isValid && updatedForm["password"].validation.isValid)
        totalValidation = true
    this.setState({
        form: updatedForm,
        validation: totalValidation
    })
}
inputChangeHandler = (e, identifier) => {
    e.preventDefault();
    let value = e.target.value;
    let updatedForm = {...this.state.form}
    let input = {...updatedForm[identifier]};
    let validity = this.checkValidity(value, input.validation);
    input.value = value;
    input.validation.isValid = validity;
    input.isTouched = true;
    updatedForm[identifier] = input;
    let validation = true;
    for (let key in updatedForm) {
        validation = validation && updatedForm[key].validation.isValid
    }
    this.setState({
        form: updatedForm,
        validation: validation
    });

}
render()
{

    let inputArray = [];
    for (let input in this.state.form) {
        inputArray.push({
            id: input,
            config: this.state.form[input]
        })
    }

    let form =<Spinner/>;
    if (!this.state.signIn) {
        form = inputArray.map(elem => {
            return <FormElement label={elem.id}
                                key={elem.id}
                                changeHandler={(event) => this.inputChangeHandler(event, elem.id)}
                                isTouched={elem.config.isTouched}
                                isValid={elem.config.validation.isValid}
            />
        })
    } else {
        // eslint-disable-next-line array-callback-return
        form = inputArray.map(elem => {
            if (elem.id === 'userName' || elem.id === 'password') {
                return <FormElement label={elem.id}
                                    key={elem.id}
                                    changeHandler={(event) => this.signInChangeHandler(event, elem.id)}
                                    isTouched={elem.config.isTouched}
                                    isValid={elem.config.validation.isValid}
                />
            }
        })
    }
    return (
        <div className={classes.Form}>
            <form>
                {form}
            </form>
            <Button title={'order'}
                    disabled={!this.state.validation} clicked={this.submitHandler}/>
            {this.state.signIn ?
                <p className={classes.Span}>DO HAVE ANY ACCOUNT? <span
                    className={classes.SignUp} onClick={this.signUpClicked}> SIGN UP </span></p>
                : null
            }
        </div>
    );
}
}

export default withRouter(Form);