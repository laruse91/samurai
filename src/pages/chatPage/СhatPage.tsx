import React, {useRef, useState} from 'react'
import {MessageCard} from '../../components/messages/MessageCard'
import {NewMessageForm} from '../../components/messages/NewMessageForm'
import style from './ChatPage.module.css'
import {Preloader} from '../../components/common/preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer'
import {selectChatMessages, selectChatStatus} from '../../selectors/selectors'

const ChatPage: React.FC = React.memo(() => {
    console.log('messages')
    const [isScrolling, setIsScrolling] = useState(true)
    const messages = useSelector(selectChatMessages)
    const status = useSelector(selectChatStatus)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    const sendNewMessage = (newMessageBody: string) => {
        dispatch(sendMessage(newMessageBody))
    }

    const messageCards = !messages ? <Preloader/>
        : messages.map((message) => (
            <MessageCard key={message.id} userName={message.userName} userId={message.userId} photo={message.photo}
                         message={message.message} withUserName={true}/>))

//messages autoscroll
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const el = e.currentTarget
        if (Math.abs((el.scrollHeight - el.scrollTop) - el.clientHeight) < 30) {
            !isScrolling && setIsScrolling(true)
            console.log('scrollON')
        } else {
            isScrolling && setIsScrolling(false)
            console.log('scrollOFF')
        }
    }
    React.useEffect(() => {
        isScrolling && messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages])

    return (
        <div className={style.chatPage}>
            <div className={style.messenger}>
                <div className={style.title}>
                    <h2>Samurai's chat</h2>
                </div>
                <div className={style.messages} onScroll={scrollHandler}>
                    {messageCards}
                    <div ref={messagesEndRef}/>
                </div>
                <NewMessageForm sendNewMessage={sendNewMessage} channelStatus={status !== ('pending' || 'error')}/>
            </div>
        </div>
    )
})

export default withAuthRedirect(ChatPage)


