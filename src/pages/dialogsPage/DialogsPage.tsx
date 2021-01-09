import React from 'react'
import './DialogsPage.css'
import Chats from './chats/Chats'
import Messages from './messages/Messages'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const DialogsPage: React.FC = () => {

    return (
        <div className='dialogs'>
            <Chats/>
            <Messages/>
        </div>
    )
}

export default withAuthRedirect(DialogsPage)