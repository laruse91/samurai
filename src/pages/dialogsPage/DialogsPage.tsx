import React, {useEffect, useRef} from 'react'
import style from './DialogsPage.module.css'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {UserLabel} from '../../components/common/userLabel/UserLabel'
import {useDispatch, useSelector} from 'react-redux'
import {
    selectAuthorizedUser,
    selectCompanions,
    selectCompanionsCount,
    selectDialogMessages
} from '../../selectors/selectors'
import {requestCompanions, requestMessages, sendMessage, TMessage} from '../../redux/dialogs-reducer'
import {MessageCard} from '../../components/messages/MessageCard'
import {NewMessageForm} from '../../components/messages/NewMessageForm'
import {Skeleton} from 'antd'
import {useParams} from 'react-router-dom'
import {v1} from 'uuid'

const DialogsPage: React.FC = React.memo(() => {
//useSelector Hook
    const messages = useSelector(selectDialogMessages)
    const companions = useSelector(selectCompanions)
    const totalCompanions = useSelector(selectCompanionsCount)
    const authorizedUser = useSelector(selectAuthorizedUser)
//useParams Hook
    const params: { [key: string]: string } = useParams()
    const currentCompanion = Number(params?.userId)
//useDispatchHook
    const dispatch = useDispatch()
//useEffect Hook
    useEffect(() => {
        dispatch(requestCompanions(authorizedUser.userId!))
    }, [])
    useEffect(() => {
        dispatch(requestMessages(currentCompanion))
    }, [currentCompanion])

    const sendNewMessage = (newMessageBody: string) => {
        const message = {
            id: v1(),
            body: newMessageBody,
            userId: authorizedUser.userId
        } as TMessage
        dispatch(sendMessage(currentCompanion, message))
    }

    const dialogs = !companions
        ? totalCompanions?.map(user => {
            return <Skeleton key={user} active avatar paragraph={{rows: 0}}/>
        })
        : Object.keys(companions).map(userId => {
            return <UserLabel key={userId} userName={companions[userId].userName} userId={Number(userId)}
                              photo={companions[userId].userPhoto}
                              info='React developer' path='dialogs'/>
        })
    const messageCards = currentCompanion && companions && messages.length && messages.map(m => {
            const name = m.userId === authorizedUser.userId ? authorizedUser.userName! : companions[currentCompanion].userName
            const photo = m.userId === authorizedUser.userId ? authorizedUser.userPhoto! : companions[currentCompanion].userPhoto
            return <MessageCard key={m.id} userName={name} userId={m.userId} photo={photo} message={m.body}/>
        }
    )
//messages autoscroll
    const messagesEndRef = useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages])

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
                            {!currentCompanion || !companions
                                ? 'Messages'
                                : companions[currentCompanion].userName
                            }
                        </h2>
                    </div>
                    <div className={style.messages}>
                        {!currentCompanion
                            ? <p className={style.startDialog}> Select companion to start dialog</p>
                            : messageCards}
                        <div ref={messagesEndRef}/>
                    </div>
                    <NewMessageForm sendNewMessage={sendNewMessage} channelStatus={Boolean(currentCompanion)}/>
                </div>
            </div>

        </div>
    )
})

export default withAuthRedirect(DialogsPage)