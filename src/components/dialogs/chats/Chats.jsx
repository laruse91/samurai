import React from 'react';
import style from './Chats.module.css';
import UserLabel from "../../common/userLabel/UserLabel";

const Chats = (props) => {

    const chats = props.users
        .map(user => (<UserLabel key={user.id}
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