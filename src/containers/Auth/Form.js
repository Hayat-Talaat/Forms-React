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
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: ''
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
                value: ''
            }
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.Form
        }
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement

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