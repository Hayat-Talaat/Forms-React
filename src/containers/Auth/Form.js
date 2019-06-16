import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Form.module.css';

class Form extends Component {
    state = {
        Form: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 25
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            gender: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: "Male", displayValue: "Male"},
                        {value: "Famele", displayValue: "Famele"}
                    ]
                },
                value: ''
            },
            profilePic: {
                elementType: 'input',
                elementConfig: {
                    type: 'file',
                    accept: 'image/*'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        }
    }

    checkValidity(value, rules) {
        let isValid = true;

        // Required
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        // Minimum Length
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        // Max Length
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.Form // get name, email ...
        }
        const updatedFormElement = {
            ...updatedForm[inputIdentifier] // inputIdentifier : get the right side
        }
        // Value
        updatedFormElement.value = event.target.value;
        // Valid
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedForm[inputIdentifier] = updatedFormElement
        console.log(updatedFormElement);
        this.setState({Form:updatedForm});
    }

    submitHandler = (event) => {
        event.preventDefault();
    } 

    render() {
        const formElementArray = [];
        for(let key in this.state.Form) {
            formElementArray.push({
                id: key,
                config: this.state.Form[key] //given key
            });
        }

        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <button>Sign</button>
            </form>
        );

        return(
            <div className={classes.FormData}>
                <h3>Sign Up</h3>
                {form}
            </div>
        );
    }
}

export default Form;