import React from 'react';
import style from './Messages.module.css';
import MessageCard from './messageCard/MessageCard';
import NewMessageForm from "./messageCard/NewMessageForm";

const Messages = (props) => {

    const sendNewMessage =(values)=> {
        props.sendNewMessage(values.newMessageBody)
    }

    const messages = props.messages
        .map(message => (<MessageCard key={message.id}
                                      id={message.id}
                                      message={message.content}/>))

    return (
        <div className={style.messages}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>Username</h2>
            </div>

            <div className={style.messagesArea}>
                {messages}
            </div>

            <div className={style.newMessage}>
                <NewMessageForm onSubmit={sendNewMessage}/>
            </div>
        </div>
    )
}

export default Messages