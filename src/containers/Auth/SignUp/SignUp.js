import React from 'react';
import Form from '../Form';
import classes from '../Form.module.css';
import TextField from '../../../components/UI/Inputs/TextField';
import Textarea from '../../../components/UI/Inputs/Textarea';
import SelectBox from '../../../components/UI/Inputs/SelectBox';

class Login extends Form {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>SignUp</h1>
                <form className={classes.Form}>
                    {/*  Username */}
                    <TextField
                        label={this.state.UserName.label}
                        value={this.state.UserName.value}
                        placeholder={this.state.UserName.placeholder}
                        changed={value => this.changeHandler('UserName', value)}
                    />
                    {/*  Email */}
                    <TextField
                        label={this.state.Email.label}
                        value={this.state.Email.value}
                        placeholder={this.state.Email.placeholder}
                        changed={value => this.changeHandler('Email', value)}
                    />
                    {/*  password */}
                    <TextField
                        label={this.state.Password.label}
                        value={this.state.Password.value}
                        placeholder={this.state.Password.placeholder}
                        changed={value => this.changeHandler('Password', value)}
                    />
                    {/*  repeat_password */}
                    <TextField
                        label={this.state.RePassword.label}
                        value={this.state.RePassword.value}
                        placeholder={this.state.RePassword.placeholder}
                        changed={value => this.changeHandler('RePassword', value)}
                    />
                    {/* Gender */}
                    <SelectBox
                        label={this.state.Gender.label}
                        value={this.state.Gender.options}
                    />
                </form>
            </div>
        );
    }
}

export default Login;