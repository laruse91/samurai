import React, {useEffect, useRef, useState} from 'react'
import style from './DialogsPage.module.css'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {UserLabel} from '../../components/common/userLabel/UserLabel'
import {useDispatch, useSelector} from 'react-redux'
import {selectAuthorizedUser, selectCompanions, selectCompanionsData} from '../../selectors/selectors'
import {getCompanionsData, TMessages} from '../../redux/dialogs-reducer'
import {MessageCard} from '../../components/messages/MessageCard'
import {NewMessageForm} from '../../components/messages/NewMessageForm'
import {Skeleton} from 'antd'
import {useParams} from 'react-router-dom'

const DialogsPage: React.FC = React.memo(() => {
    // useStateHook
    const [messages, setMessages] = useState([] as TMessages[])
//useSelector Hook
    const companions = useSelector(selectCompanions)
    const companionsData = useSelector(selectCompanionsData)
    const authorizedUser = useSelector(selectAuthorizedUser)
//useParams Hook
    const params: { [key: string]: string } = useParams()
    const currentCompanionUserId = Number(params?.userId)
//useDispatchHook
    const dispatch = useDispatch()
//useEffect Hook
    useEffect(() => {
        companions.forEach(c => {
            dispatch(getCompanionsData(c.userId))
        })

    }, [])
    useEffect(() => {
        const companion = companions.find(c => c.userId === currentCompanionUserId)
        companion && setMessages(companion.messages)
    }, [currentCompanionUserId])

    const sendMessage = (newMessageBody: string) => {
        const message = {
            id: messages.length + 1,
            body: newMessageBody,
            userId: authorizedUser.userId
        } as TMessages
        setMessages([...messages, message])
    }

    const dialogs = companions?.map(c => {
        const user = companionsData.find(user => user.userId === c.userId)
        if (user) {
            return (
                < UserLabel key={c.userId} userName={user!.userName} userId={c.userId} photo={user!.userPhoto} info='React developer' path='dialogs'/>
            )
        }
        return <Skeleton avatar paragraph={false} key={c.userId}/>
    })
    const messageCards = messages && messages.map(m => {
        let user = companionsData.find(c => c.userId === m.userId)
        if (m.userId === authorizedUser.userId) {
            return <MessageCard key={m.id} userName={authorizedUser.userName as string} userId={m.userId}
                                photo={authorizedUser.userPhoto} message={m.body}/>
        } else if (user) {
            return <MessageCard key={m.id} userName={user!.userName} userId={m.userId} photo={user!.userPhoto}
                                message={m.body}/>
        }
    })
//messages autoscroll
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const scrollToBottom = () => {
        messagesEndRef?.current?.scrollIntoView({behavior: 'smooth'})
    }
    React.useEffect(scrollToBottom, [messages])

    return (
        <div className={style.dialogs}>
            <div className={style.messenger}>
                <div className={style.companionsBlock}>
                    <div className={style.title}>
                        <h2>Dialogs</h2>
                    </div>
                    <div className={style.users}>
                        {dialogs}
                    </div>
                </div>

                <div className={style.mesBlock}>
                    <div className={style.title}>
                        <h2>
                            {!currentCompanionUserId
                                ? 'Messages'
                                : companionsData.find(user => user.userId === currentCompanionUserId)?.userName}
                        </h2>
                    </div>
                    <div className={style.messages}>
                        {!currentCompanionUserId
                            ? <p className={style.startDialog}> Select companion to start dialog</p>
                            : messageCards}
                        <div ref={messagesEndRef}/>
                    </div>
                    <NewMessageForm sendNewMessage={sendMessage} channelStatus={Boolean(currentCompanionUserId)}/>
                </div>
            </div>

        </div>
    )
})

export default withAuthRedirect(DialogsPage)