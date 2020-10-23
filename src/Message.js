import React from 'react';
import './Message.css';

function Message(props) {
    const style = props.receiving ? 'receiving' : 'sending';
    const date = new Date(props.easy.toMillis());
    const dateString = new Date().getDate() === date.getDate() && new Date().getMonth() === date.getMonth()
                        ? `${date.getHours()}:${date.getMinutes()<10? '0' + date.getMinutes(): date.getMinutes()}`
                        : `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:${date.getMinutes()<10? '0' + date.getMinutes(): date.getMinutes()}`;
    return (
        <div className={'messageBody ' + style} title={props.author}>
            <p>{props.content}</p>
            <span style={{float:'right', marginRight: '5px'}}>{dateString}</span>
        </div>
    );
}

export default Message;