import React, { Component } from 'react';
import classes from './Form.module.css';
import TextField from '../../components/UI/Inputs/TextField';
import Textarea from '../../components/UI/Inputs/Textarea';
import SelectBox from '../../components/UI/Inputs/SelectBox';

class Form extends Component {
    state = {
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


    changeHandler = (name, value) => {
        this.setState({
<<<<<<< HEAD
            UserName: { value }
=======
          [name]: {
              ...this.state[name],
              value
          }
>>>>>>> 1424e9f30611b93cfd1fe71b7c215ffebed9034f
        });
    }

    render() {

        return (
            <div>
                <form className={classes.Form}>
                    <TextField
                        label={this.state.UserName.label}
                        value={this.state.UserName.value}
                        placeholder={this.state.UserName.placeholder}
                        changed={value => this.changeHandler('UserName', value)}
                    />
                    <Textarea
                        label={this.state.Message.label}
                        placeholder={this.state.Message.placeholder}
                    />
                    <SelectBox
                        label={this.state.Country.label}
                        value={this.state.Country.options}
                    />
                </form>

            </div>

        );
    }
}

export default Form;
