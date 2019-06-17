import React from 'react';

const Textarea = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <textarea
                placeholder={props.placeholder}
            >
            </textarea>
        </div>
    );
}

export default Textarea;