import React, { Component } from 'react';


 
class Form extends Component {
    init = (form) => {
        this.state = form;
    }

    checkValidity = (event) => {
        event.preventDefault();
        const formElement = this.state;

        
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
