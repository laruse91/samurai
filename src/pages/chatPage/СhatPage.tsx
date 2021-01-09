import React from 'react'
import {MessageCard} from '../../components/common/messageCard/MessageCard'
import {NewMessageForm} from '../../components/common/newMessageForm/NewMessageForm'
import style from './ChatPage.module.css'
import {TInitialStateMessage} from '../../types/types'
import {Preloader} from '../../components/common/preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage: React.FC = React.memo(() => {
//useStateHook
    const [messages, setMessages] = React.useState<TInitialStateMessage[]>([])
//useEffect

    React.useEffect(() => {
        ws.addEventListener('message', (event: MessageEvent) => {
            const newMessages = JSON.parse(event.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    const sendNewMessage = (newMessageBody: string) => {
        ws.send(newMessageBody)
    }

    const messageCards = messages.length === 0 ? <Preloader/> : messages
        .map((message, i) => (<MessageCard key={i + 1} userName={message.userName}
                                           userId={message.userId} photo={message.photo}
                                           message={message.message}/>))

    return (
        <div className={style.chatPage}>
            <div className={style.messagesArea}>
                {messageCards}
            </div>
            <NewMessageForm sendNewMessage={sendNewMessage}/>
        </div>
    )
})

export default withAuthRedirect(ChatPage)


