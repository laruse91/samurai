import React from 'react'
import style from './Chats.module.css'
import {UserLabel} from '../../../components/common/userLabel/UserLabel'
import {useSelector} from 'react-redux'
import {selectMessUsers} from '../../../redux/selectors'

const Chats: React.FC = () => {

//useSelector Hook
    const users = useSelector(selectMessUsers)

    const chats: Array<any> = users
        .map(user => (<UserLabel key={user.id}
                                 userName={user.name}
                                 id={user.id}
                                 photo={user.photo}
                                 info={user.info}/>))

    return (
        <div className={style.chats}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>Your dialogs</h2>
                <div className={style.search}>
                    <form action='#'>
                        <input type='text' placeholder='Search' className={style.searchInput}/>
                    </form>
                </div>
            </div>

            <div className={style.chatsList}>
                {chats}
            </div>
        </div>
    )
}

export default Chats