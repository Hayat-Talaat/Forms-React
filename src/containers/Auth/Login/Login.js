import React from 'react';
import Form from '../Form';
import classes from '../Form.module.css';
import TextField from '../../../components/UI/Inputs/TextField';

class Login extends Form {
    constructor(props) {
        super(props);

        this.init({
            UserName: {
                label: "UserName",
                placeholder: 'Username',
                value: "User Name"
            },
            Email: {
                label: "Email",
                placeholder: 'Email',
                value: "Email"
            },
            Password: {
                label: "Password",
                placeholder: 'Password',
                value: "Password"
            },
            RePassword: {
                label: "Re-Password",
                placeholder: 'Re-Password',
                value: "Re-Password"
            },
            Message: {
                label: "Message",
                placeholder: 'Your Message',
                value: "Message"
            },
            Gender: {
                label: "Gender",
                options: [
                    { value: "Female", displayValue: "Female" },
                    { value: "Male", displayValue: "Male" }
                ]
            }
        })
    }

    render() {
        return (
            <div>
                <form className={classes.Form}>
                    <TextField
                        label={this.state.Email.label}
                        value={this.state.Email.value}
                        placeholder={this.state.Email.placeholder}
                        changed={value => this.changeHandler('Email', value)}
                    />
                    <TextField
                        label={this.state.Password.label}
                        value={this.state.Password.value}
                        placeholder={this.state.Password.placeholder}
                        changed={value => this.changeHandler('Password', value)}
                    />
                    <button onClick={this.submitionHandler}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;