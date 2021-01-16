import React, { useState} from 'react'
import {MessageCard} from '../../components/messages/MessageCard'
import {NewMessageForm} from '../../components/messages/NewMessageForm'
import style from './ChatPage.module.css'
import {TInitialStateMessage} from '../../types/types'
import {Preloader} from '../../components/common/preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const ChatPage: React.FC = React.memo(() => {
//useStateHook
    const [messages, setMessages] = React.useState<TInitialStateMessage[]>([])
    const [wsChannel, setWsChannel] = React.useState<WebSocket | null>(null)
    const [wsStatus, setWsStatus] = useState<'pending' | 'ready'>('pending')
//useEffect
    React.useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChannel, 3000)
        }

        function createChannel() {
            //check is ws connected or not and remove eventListener
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)

            setWsChannel(ws)
        }

        createChannel()

        //clean up func
        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    React.useEffect(() => {
        const messageHandler = (event: MessageEvent) => {
            const newMessages = JSON.parse(event.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        const openHandler = () => {
            setWsStatus('ready')
        }
        wsChannel?.addEventListener('message', messageHandler)
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendMessage = (newMessageBody: string) => {
        wsChannel?.send(newMessageBody)
    }
    const isChannelReady = (wsStatus === 'ready')

    const messageCards = messages.length === 0
        ? <Preloader/>
        : messages.map((message, i) => (
            <MessageCard key={i + 1} userName={message.userName} userId={message.userId} photo={message.photo}
                         message={message.message} withUserName={true}/>))

    return (
        <div className={style.chatPage}>
            <div className={style.title}>
                <h2>Samurai's chat</h2>
            </div>
            <div className={style.messages}>
                {messageCards}
            </div>
            <NewMessageForm sendNewMessage={sendMessage} channelStatus={isChannelReady}/>
        </div>
    )
})

export default withAuthRedirect(ChatPage)


