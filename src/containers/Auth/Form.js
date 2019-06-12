import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import './Form.css';

class Form extends Component {
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
            </div>
        );
    }
}

export default Form;