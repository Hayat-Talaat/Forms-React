import React from 'react';
import Form from '../Form';
import classes from '../Form.module.css';
import TextField from '../../../components/UI/Inputs/TextField';
import {isRequired} from '../Validator/isRequired';
import {isPassword} from '../Validator/isPassword';
import {isEmail} from '../Validator/isEmail';

class Login extends Form {
    constructor(props) {
        super(props);

        this.init({
            Email: {
                label: 'Email',
                placeholder: 'Email',
                type: 'email',
                value: '',
                validator: [
                    isRequired
                ],
                isValid: false,
                message: ''
            },
            Password: {
                label: 'Password',
                placeholder: 'Password',
                type: 'password',
                value: '',
                validator: [
                    isRequired
                ],
                isValid: false,
                message: ''
            }
        })
    }

    submitionHandler = event => {
        event.preventDefault();
        // isRequired 
        if (!isRequired(this.state.Email.value) || !isRequired(this.state.Password.value)) {
            alert("Empty Inputs");
        }
        
        // isEmail
        if (!isEmail(this.state.Email.value)) {
            alert("You have entered an invalid email address!");
        } 

        // isPassword
        if (isPassword(this.state.Password.value)) {
            alert('faild, try another password')
        } 
    }

    
    render() {
        
        const inputClasses = [classes.InputField],
            emailValid = this.state.Email.isValid,
            passValid = this.state.Email.isValid;

        if (emailValid || passValid == false) {
            inputClasses.push(classes.Invalid);
        }
        
        return (
            <div>
                <form className={classes.Form}>
                    <TextField
                        label={this.state.Email.label}
                        value={this.state.Email.value}
                        type={this.state.Email.type}
                        placeholder={this.state.Email.placeholder}
                        changed={value => this.changeHandler('Email', value)}
                        ggfd={inputClasses.join(' ')}
                    />
                    <TextField
                        label={this.state.Password.label}
                        value={this.state.Password.value}
                        type={this.state.Password.type}
                        placeholder={this.state.Password.placeholder}
                        changed={value => this.changeHandler('Password', value)}
                        ggfd={inputClasses.join(' ')}
                    />
                    <button onClick={this.checkValidity}>Login</button>
                </form>
                
            </div>
        );
    }
}

export default Login;