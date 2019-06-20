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
                var value = formElement[field];
                const isValid = value.validator.map(item => (
                    item()
                ))
                
                if (value.isValid) {
                    value.message = ''
                }


                // for(let x in isValid) {
                //     console.log(x);
                //     if (x == 0){
                //         alert("test")
                //     }
                // }


                // const found = isValid.find(el => {
                //     el = false > 1
                // });
                // console.log(found);
                

                // const found = isValid.some(function(el){
                //     return el = false;
                // });
                // console.log(found);

                // if(isValid.includes(false)) {
                //     alert("test test");
                // }
               
            }
            
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
