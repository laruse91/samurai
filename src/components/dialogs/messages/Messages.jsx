import React from 'react';
import style from './Messages.module.css';
import MessageCard from './messageCard/MessageCard';
import TypeMessage from "./typeMessage/TypeMessage";

const Messages = (props) => {

    const messages = props.messages
        .map(message => (<MessageCard id={message.id}
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
                <TypeMessage newMessage={props.newMessage}
                             textUpdate={props.textUpdate}
                             sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}

export default Messages