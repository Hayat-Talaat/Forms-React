import React from 'react';
import './Inputs.module.css';
import classes from './Inputs.module.css';

const TextField = props => {
    const {
        type,
        label,
        placeholder,
        changed,
        message,
        isValid,
    } = props;

    return (
        <div className={classes.InputElements}>
            <label className={classes.Label}>{label}</label>
            <input 
                className={isValid ? '' : classes.error}
                type={type}
                placeholder={placeholder}
                onChange={e => changed(e.target.value)}
            />

            {message}
        </div>
    );
}

export default TextField;