import React from 'react';
import './SendText.css';

let sendMessage = (event, postMessage) => {
    if(!event.shiftKey && event.key === 'Enter') {
        event.preventDefault();
        postMessage(event.target.value);
        event.target.value = '';
    }
};

function SendText(props) {
    return (
            <textarea className='textArea'
                      onKeyDown={event => sendMessage(event, props.postMessage)}
                      name="" id="TextArea" cols="30" rows="10" />
    );
}

export default SendText;