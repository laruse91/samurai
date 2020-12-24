import React from 'react';
import './Dialogs.css';
import Chats from './chats/Chats'
import Messages from './messages/Messages'
import {TInitialStateMessage, TInitialStateUserType} from "../../types/types";

type TProps = {
    users: Array<TInitialStateUserType>
    messages: Array<TInitialStateMessage>
    sendNewMessage: (newMessageBody: string) => void
}

const Dialogs : React.FC<TProps> = (props) => {

    return (
        <div className='dialogs'>
            <Chats users={props.users}/>

            <Messages messages={props.messages}
                      sendNewMessage={props.sendNewMessage}/>
        </div>
    )
}

export default Dialogs