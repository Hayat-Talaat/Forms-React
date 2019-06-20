import React from 'react';
import Form from '../Form';
import classes from '../Form.module.css';
import TextField from '../../../components/UI/Inputs/TextField';
import { isRequired, isEmail, isPassword } from '../Validators/Validators';


//form { isValid, submitted, fields {}}

class Login extends Form {
    constructor(props) {
        super(props);
        this.init(
            {
                Email: {
                    label: 'Email',
                    placeholder: 'Email',
                    type: 'email',
                    value: '',
                    validators: [
                        isRequired('KOKO')
                    ],
                    isValid: true,
                    toched: false,
                    message: ''
                },
                Password: {
                    label: 'Password',
                    placeholder: 'Password',
                    type: 'password',
                    value: '',
                    validators: [
                        isRequired()
                    ],
                    isValid: true,
                    toched: false,
                    message: ''
                }
            })
    }

    submitionHandler = event => {
        event.preventDefault();
        //isRequired
        if (!isRequired(this.state.Email.value) || !isRequired(this.state.Password.value)) {
            alert("Empty Inputs");
        }

        // isEmail
        if (!isEmail(this.state.Email.value)) {
            alert(this.state.Email.message);
        }

        // isPassword
        if (isPassword(this.state.Password.value)) {
            alert(this.state.Password.message)
        }
    }


    render() {
        return (
            <div>
                <form className={classes.Form}>
                    <TextField
                        changed={value => this.changeHandler('Email', value)}
                        {...this.state.Email}
                    />
                    <TextField
                        changed={value => this.changeHandler('Password', value)}
                        {...this.state.Password}
                    />
                    <button onClick={this.checkValidity}>Login</button>
                </form>

            </div>
        );
    }
}

export default Login;