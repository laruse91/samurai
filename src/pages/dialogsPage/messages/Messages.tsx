import React from 'react'
import style from './Messages.module.css'
import {MessageCard} from '../../../components/common/messageCard/MessageCard'
import {NewMessageForm} from '../../../components/common/newMessageForm/NewMessageForm'
import {selectMessages} from '../../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from '../../../redux/dialogs-reducer'

const Messages: React.FC = React.memo(() => {
    
//useSelector Hook
    const messages = useSelector(selectMessages)
//useDispatchHook
    const dispatch = useDispatch()

    const sendMessage = (newMessageBody: string) => {
        dispatch(actions.sendNewMessage(newMessageBody))
    }

    const messageCards = messages
        .map(message => (<MessageCard key={message.userId} userName={message.userName}
                                      userId={message.userId} photo={message.photo}
                                      message={message.message}/>))

    return (
        <div className={style.messages}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>Username</h2>
            </div>

            <div className={style.messagesArea}>
                {messageCards}
            </div>

            <div className={style.newMessage}>
                <NewMessageForm sendNewMessage={sendMessage}/>
            </div>
        </div>
    )
})

export default Messages