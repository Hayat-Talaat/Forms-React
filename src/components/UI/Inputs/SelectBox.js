import React from 'react';
import './Inputs.css';


const SelectBox = (props) => {
    return (
        <div className="InputElements">
            <label className="Label">{props.label}</label>
            <select className="InputField">
                {props.value.map(option => (
                    <option>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectBox;