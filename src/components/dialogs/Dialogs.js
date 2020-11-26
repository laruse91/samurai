import React from 'react';
import './Dialogs.css';
import Chats from "./chats/Chats";
import Messages from "./messages/Messages";

const Dialogs = (props) => {

    return (
        <div className="dialogs">
            <Chats users={props.users}/>
            <Messages messages={props.messages}
                      newMessage={props.newMessage}
                      textUpdate={props.textUpdate}
                      sendMessage={props.sendMessage}/>
        </div>
    )

}

export default Dialogs