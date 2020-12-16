import React from 'react';
import style from './Messages.module.css';
import MessageCard from './messageCard/MessageCard';
import NewMessageForm from "./messageCard/NewMessageForm";
import {TInitialStateMessage} from "../../../redux/types/types";

type TProps = {
    messages: Array<TInitialStateMessage>
    sendNewMessage: (newMessageBody: string) => void
}
const Messages = (props : TProps) => {

    const sendNewMessage =(values: any)=> {
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