import React from 'react'
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
//useEffect
    React.useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            console.log('wsChannel closed')
            setTimeout(createChannel, 3000)
        }

        function createChannel() {
            //check is ws connected or not and remove eventListener
            if (ws !== null) {
                ws?.removeEventListener('close', closeHandler)
                ws?.close()
            }

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()
        //clean up func
        return () => {
            ws.addEventListener('close', closeHandler)
            ws.close()
        }
    }, [])


    React.useEffect(() => {

        const messageHandler = (event: MessageEvent) => {
            const newMessages = JSON.parse(event.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }

        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }

    }, [wsChannel])

    const sendMessage = (newMessageBody: string) => {
        wsChannel?.send(newMessageBody)
    }

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
            <NewMessageForm sendNewMessage={sendMessage} ws={wsChannel}/>
        </div>
    )
})

export default withAuthRedirect(ChatPage)


