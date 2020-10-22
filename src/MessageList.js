import React from 'react';
import './MessageList.css';
import Message from "./Message";

function MessageList(props) {
    const messages = props.messages ?
        props.messages.map(message => <Message key={message.id} receiving={props.user !== message.data().user} author={message.data().author} content={message.data().content} /> )
        : null
    return (
        <div className='messages'>
            {messages}
        </div>
    );
}

export default MessageList;