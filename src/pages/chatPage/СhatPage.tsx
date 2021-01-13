import React from 'react'
import {MessageCard} from '../../components/messages/MessageCard'
import {NewMessageForm} from '../../components/messages/NewMessageForm'
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

    const sendMessage = (newMessageBody: string) => {
        ws.send(newMessageBody)
    }

    const messageCards = messages.length === 0
        ? <Preloader/>
        : messages.map((message, i) => (<MessageCard key={i + 1} userName={message.userName} userId={message.userId} photo={message.photo} message={message.message} withName={true}/>))

    return (
        <div className={style.chatPage}>
            <div className={style.title}>
                <h2>Samurai's chat</h2>
            </div>
            <div className={style.messages}>
                {messageCards}
            </div>
            <NewMessageForm sendNewMessage={sendMessage}/>
        </div>
    )
})

export default withAuthRedirect(ChatPage)


