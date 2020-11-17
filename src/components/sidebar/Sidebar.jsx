import React from 'react';
import style from './Sidebar.module.css'
import UserCard from './UserCard'

const Sidebar = (props) => {

    const users = props.users.map(user => (<UserCard name={user.name}
                                                        lastName={user.lastName}
                                                        id={user.id}
                                                        photo={user.photo}/>))
    return (
        <aside className={style.sidebar}>
            {users}
        </aside>
    )
}

export default Sidebar;