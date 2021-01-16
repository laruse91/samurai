import React, {useEffect} from 'react'
import style from './DialogsPage.module.css'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {UserLabel} from '../../components/common/userLabel/UserLabel'
import {useDispatch, useSelector} from 'react-redux'
import {selectCompanions, selectMessages, selectMessUsers, selectAuthorizedUser} from '../../redux/selectors'
import {actions, getCompanions, TMessages} from '../../redux/dialogs-reducer'
import {MessageCard} from '../../components/messages/MessageCard'
import {NewMessageForm} from '../../components/messages/NewMessageForm'

const DialogsPage: React.FC = React.memo(() => {
//useSelector Hook
    const users = useSelector(selectMessUsers)
    const messages = useSelector(selectMessages)
    const companions = useSelector(selectCompanions)
    const authorizedUser = useSelector(selectAuthorizedUser)
//useDispatchHook
    const dispatch = useDispatch()
//useEffect Hook
    useEffect(() => {
        let ids = Array.from(new Set(messages.map(m => m.userId)))
        dispatch(getCompanions(ids))
    }, [messages])

    const dialogs = users.map(user => (
        <UserLabel key={user.userName} userName={user.userName} userId={user.userId} photo={user.userPhoto}
                   info={'React developer'}/>))

    const sendMessage = (newMessageBody: string) => {
        const message = {
            id: messages.length + 1,
            body: newMessageBody,
            userId: authorizedUser.userId
        } as TMessages
        dispatch(actions.sendNewMessage(message))
    }

    const messageCards = messages.map(m => {
        const c = companions.find(c => c.userId === m.userId)
        if (c)
            return <MessageCard key={m.id} userName={c.userName} userId={m.userId} photo={c.userPhoto}
                                message={m.body}/>
    })

    return (
        <div className={style.dialogs}>
            <div className={style.block}>
                <div className={style.title}>
                    <h2>Dialogs</h2>
                </div>
                <div className={style.users}>
                    {dialogs}
                </div>
            </div>

            <div className={style.mesBlock}>
                <div className={style.title}>
                    <h2>userName</h2>
                </div>
                <div className={style.messages}>
                    {messageCards}
                </div>
                <NewMessageForm sendNewMessage={sendMessage} channelStatus={true}/>
            </div>
        </div>
    )
})

export default withAuthRedirect(DialogsPage)