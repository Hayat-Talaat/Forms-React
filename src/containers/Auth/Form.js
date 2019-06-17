import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Form.module.css';
import TextField from '../../components/UI/Inputs/TextField';
import Textarea from '../../components/UI/Inputs/Textarea';
import SelectBox from '../../components/UI/Inputs/SelectBox';

class Form extends Component {
    state = {
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
                    { value: "Egypt", displayValue: "Egypt" },
                    { value: "USA", displayValue: "USA" },
                ]
            }

        }
    }


    changeHandler = value => {
        this.setState({
            newForm: {
                UserName: { value }
            }
        });
    }

    render() {

        return (
            <div>
                
                <form className={classes.Form}>
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
                </form>

            </div>

        );
    }
}

export default Form;