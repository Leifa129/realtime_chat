import React from 'react';
import './Message.css';

function Message(props) {
    const style = props.receiving ? 'receiving' : 'sending';
    return (
        <div className={'messageBody ' + style}>
            {props.content}
        </div>
    );
}

export default Message;