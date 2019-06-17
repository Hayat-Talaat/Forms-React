import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    { value: "Male", displayValue: "Male" },
                ]
            }
        }
    }

    changeHandler = (name, value) => {
        this.setState({
          [name]: {
              ...this.state[name],
              value
          }
        });
    }

    
}

export default Form;
