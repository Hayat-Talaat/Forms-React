import React from 'react';

const Text = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" value={props.value} />
        </div>
    );
}

export default Text;