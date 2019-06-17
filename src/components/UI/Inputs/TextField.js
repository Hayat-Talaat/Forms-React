import React from 'react';
import './Inputs.css';

const TextField = (props) => {
    return (
        <div className="InputElements">
            <label className="Label">{props.label}</label>
            <input 
                className="InputField"
                type="text" 
                placeholder={props.placeholder}
                onChange={e => props.changed(e.target.value)}
            />
        </div>
    );
}

export default TextField;