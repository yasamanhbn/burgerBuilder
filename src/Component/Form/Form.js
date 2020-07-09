import React, {Component} from "react";
import FormElement from './FormElement'
import classes from './Form.module.css'
class Form extends Component{
    state={
        form:{
            userName:{
                val:'userName'
            },
            password:{
                val: 'password'
            },
            email:{
                val:'email'
            },
            phone:{
                val:'phone'
            }
        }
    }
    render() {
        return (
            <div className={classes.Form}>
                <form>
                    {Object.keys(this.state.form).map(elem=>{
                        return <FormElement label={this.state.form[elem].val}
                                            key={this.state.form[elem].val}/>
                    })}
                </form>
            </div>
        );
    }
}

export default Form;