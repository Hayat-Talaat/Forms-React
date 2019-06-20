import React, { Component } from 'react';
import {isRequired, isEmail, isPassword} from './Validators/Validators';


 
class Form extends Component {
    init = (form) => {
        this.state = form;
    }

    checkValidity = (event) => {
        event.preventDefault();
        const formElement = this.state;

        //isRequired
        // if (!isRequired(this.state.Email.value) || !isRequired(this.state.Password.value)) {
        //     alert("Empty Inputs");
        // }
        
        // // isEmail
        // if (!isEmail(this.state.Email.value)) {
        //     alert(this.state.Email.message);
        // } 

        // // isPassword
        // if (isPassword(this.state.Password.value)) {
        //     alert(this.state.Password.message)
        // } 

        for(let field in formElement) {
            if(formElement.hasOwnProperty(field)) {
                var element = formElement[field];
                const isValid = element.validators.map(validator => {
                    const validationResult = validator(element.value);

                    element.isValid = !validationResult;
                    element.message = validationResult || '';
                });
            }
            
            
            this.setState(formElement);
            
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
