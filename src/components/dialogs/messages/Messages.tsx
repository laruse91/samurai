import React from 'react';
import style from './Messages.module.css';
import MessageCard from './messageCard/MessageCard';
import NewMessageReduxForm from "./messageCard/NewMessageForm";
import {TInitialStateMessage} from "../../../types/types";

type TProps = {
    messages: Array<TInitialStateMessage>
    sendNewMessage: (newMessageBody: string) => void
}
export type TNewMessageFormData = {
    newMessageBody: string
}
const Messages: React.FC<TProps> = (props) => {

    const sendNewMessage =(values:TNewMessageFormData)=> {
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
                <NewMessageReduxForm onSubmit={sendNewMessage}/>
            </div>
        </div>
    )
}

export default Messages