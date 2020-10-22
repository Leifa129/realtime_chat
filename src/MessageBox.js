import React, {Component} from 'react';
import './MessageBox.css'
import SendText from './SendText';
import MessageList from './MessageList';

class MessageBox extends Component {
    render() {
        return (
            <>
            <div className='messageBox'>
               <MessageList user={this.props.user} messages={this.props.messages} />

                <SendText user={this.props.user} postMessage={this.props.postMessage} />
            </div>
            </>
        );
    }

}

export default MessageBox;