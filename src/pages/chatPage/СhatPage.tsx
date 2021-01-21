import React from 'react'
import {MessageCard} from '../../components/messages/MessageCard'
import {NewMessageForm} from '../../components/messages/NewMessageForm'
import style from './ChatPage.module.css'
import {Preloader} from '../../components/common/preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer'
import {selectChatMessages} from '../../selectors/selectors'

const ChatPage: React.FC = React.memo(() => {

    const messages = useSelector(selectChatMessages)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    const sendNewMessage = (newMessageBody: string) => dispatch(sendMessage(newMessageBody))

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
            <NewMessageForm sendNewMessage={sendNewMessage} channelStatus={true}/>
        </div>
    )
})

export default withAuthRedirect(ChatPage)


