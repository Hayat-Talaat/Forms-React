import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Form.module.css';
import TextField from '../../components/UI/Inputs/TextField';
import Textarea from '../../components/UI/Inputs/Textarea';
import SelectBox from '../../components/UI/Inputs/SelectBox';

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
        },
        newForm: {
            UserName: {
                label: "UserName",
                placeholder: 'Username',
                value: "User Name"
            },
            Message: {
                label: "Message",
                placeholder: 'Your Message',
                value: "Message"
            },
            Country: {
                label: "Country",
                options: [
                    {value: "Egypt", displayValue: "Egypt"},
                    {value: "USA", displayValue: "USA"},
                ]
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

    changeHandler = value => {
        this.setState({
            newForm: {
                UserName: { value }
            }
        });
    }

    render() {
        // did mount lifecycle
        const formElementArray = [];
        for(let key in this.state.Form) {
            formElementArray.push({
                id: key,
                config: this.state.Form[key] //given key
            });
        }

        const form = (
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
            <div>
                <div className={classes.FormData}>
                    <h3>Sign Up</h3>
                    {form}
                </div>

                <hr />
                <TextField 
                    label={this.state.newForm.UserName.label} 
                    value={this.state.newForm.UserName.value} 
                    placeholder={this.state.newForm.UserName.placeholder}
                    changed={this.changeHandler}
                />
                <Textarea
                    label={this.state.newForm.Message.label} 
                    placeholder={this.state.newForm.Message.placeholder}
                />
                <SelectBox 
                    label={this.state.newForm.Country.label}
                    value={this.state.newForm.Country.options}
                />
            </div>
            
        );
    }
}

export default Form;