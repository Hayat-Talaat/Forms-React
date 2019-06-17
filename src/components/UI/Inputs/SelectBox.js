import React from 'react';

const SelectBox = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
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