import React from 'react';
import './Inputs.css';


const Textarea = (props) => {
    return (
        <div className="InputElements">
            <label className="Label">{props.label}</label>
            <textarea
                className="InputField"
                placeholder={props.placeholder}
            >
            </textarea>
        </div>
    );
}

export default Textarea;