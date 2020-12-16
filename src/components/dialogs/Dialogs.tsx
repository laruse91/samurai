import React from 'react';
import './Dialogs.css';
import Chats from './chats/Chats'
import Messages from './messages/Messages'
import {Redirect} from 'react-router-dom'
import {TInitialStateMessage, TInitialStateUserType} from "../../redux/types/types";

type TProps = {
    users: Array<TInitialStateUserType>
    messages: Array<TInitialStateMessage>
    isAuth: boolean
    sendNewMessage: (newMessageBody: string) => void
}

const Dialogs = (props: TProps) => {

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className='dialogs'>
            <Chats users={props.users}/>

            <Messages messages={props.messages}
                      sendNewMessage={props.sendNewMessage}/>
        </div>
    )
}

export default Dialogs