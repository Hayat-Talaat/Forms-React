import React from 'react';

const TextField = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input 
                type="text" 
                placeholder={props.placeholder}
                onChange={e => props.changed(e.target.value)}
            />
        </div>
    );
}

export default TextField;