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
                var value = formElement[field];
                const isValid = value.validator.map(item => (
                    item()
                ))
                for(let x in isValid) {
                    console.log(x);
                    if (x == 0){
                        alert("test")
                    }
                }

                // const found = isValid.find(el => {
                //     el = false
                // });
                

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
