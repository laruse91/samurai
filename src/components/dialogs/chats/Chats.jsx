import React from 'react'
import DialogCard from './dialogCard/DialogCard'
import style from './Chats.module.css'

const Chats = (props) => {

    const chats = props.users
        .map(user => (<DialogCard key={user.id}
                                  name={user.name}
                                  lastName={user.lastName}
                                  id={user.id}
                                  photo={user.photo}/>))

    return (
        <div className={style.chats}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>Your dialogs</h2>
                <div className={style.search}>
                    <form action="#">
                        <input type="text" placeholder="Search" className={style.searchInput}/>
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