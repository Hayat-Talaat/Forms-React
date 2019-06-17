import React, { Component } from 'react';
import {isRequired} from './Validator/isRequired';
import {isPassword} from './Validator/isPassword';
import {isEmail} from './Validator/isEmail';
 
class Form extends Component {
    init = (form) => {
        this.state = form;
    }

    submitionHandler = event => {
        event.preventDefault();
        // isRequired 
        if (!isRequired(this.state.email) || !isRequired(this.state.password)) {
            alert("Empty Inputs");
        }
        
        // isEmail
        if (!isEmail(this.state.email)) {
            alert("You have entered an invalid email address!");
        } 

        // isPassword
        if (!isPassword(this.state.password)) {
            alert('faild, try another...')
        } 
    }

    changeHandler = (name, value) => {
        this.setState({
          [name]: {
              ...this.state[name],
              value
          }
        });
    }
}

export default Form;
