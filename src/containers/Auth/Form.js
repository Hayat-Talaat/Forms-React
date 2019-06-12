import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import test from './Form.module.css';

class Form extends Component {
    state = {
        submitForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: ''
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
            prfilePic: {
                elementType: 'input',
                elementConfig: {
                    type: 'file',
                    accept: 'image/*'
                },
                value: ''
            }
        }
    }

    render() {
        let form = (
            <form>
                <Input className="Input" inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input className="Input" inputtype="input" type="email" name="email" placeholder="Your Mail" />
                <button>ORDER</button>
            </form>
        );

        return(
            <div className="FormData">
                <h3>Login</h3>
                {form}
                <div className={test.Test}>test</div>
            </div>
        );
    }
}

export default Form;