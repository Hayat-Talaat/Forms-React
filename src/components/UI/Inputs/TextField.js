import React from 'react';
import './Inputs.module.css';
import classes from './Inputs.module.css';

const TextField = (props) => {
    return (
        <div className={classes.InputElements}>
            <label className={classes.Label}>{props.label}</label>
            <input 
                className={props.inputClass}
                type={props.type}
                placeholder={props.placeholder}
                onChange={e => props.changed(e.target.value)}
            />
        </div>
    );
}

export default TextField;