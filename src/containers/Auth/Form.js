import React, { Component } from 'react';

 
class Form extends Component {
    init = (form) => {
        this.state = form;
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
