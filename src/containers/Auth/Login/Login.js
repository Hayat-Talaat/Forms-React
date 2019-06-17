import React from 'react';
import Form from '../Form';
import classes from '../Form.module.css';
import TextField from '../../../components/UI/Inputs/TextField';

class Login extends Form {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
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
                </form>
            </div>
        );
    }
}

export default Login;