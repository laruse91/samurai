import React from 'react';
import './Sidebar.css'
import UserLabel from '../common/userLabel/UserLabel'
import Preloader from "../common/preloader/Preloader";

const Sidebar = (props) => {
    if (!props.users) {
        return <Preloader/>
    }
    const users = props.users.map(user => (<UserLabel key={user.id}
                                                      name={user.name}
                                                      // lastName={user.lastName}
                                                      id={user.id}
                                                      photo={user.photos.large}/>))
    return (
        <aside className="sidebar">
            {users}
        </aside>
    )
}

export default Sidebar;