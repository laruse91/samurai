import React from 'react';
import './Sidebar.css'
import UserCard from './UserCard'

const Sidebar = (props) => {

    const users = props.users.map(user => (<UserCard key={user.id}
                                                     name={user.name}
                                                     lastName={user.lastName}
                                                     id={user.id}
                                                     photo={user.photo}/>))
    return (
        <aside className="sidebar">
            {users}
        </aside>
    )
}

export default Sidebar;