import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Form.css'

class Form extends Component {
    render() {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="email" name="email" placeholder="Your Mail" />
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="text" name="email" placeholder="Your Mail" />
                <button>ORDER</button>
            </form>
        );

        return(
            <div className={classes.FormData}>
                <h3>Login</h3>
                {form}
                <div className={classes.Test}>test</div>
            </div>
        );
    }
}

export default Form;