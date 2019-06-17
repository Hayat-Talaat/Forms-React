import React from 'react';

const TextField = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input 
                type="text" 
                placeholder={props.placeholder}
                onChange={props.changed}
            />
        </div>
    );
}

export default TextField;