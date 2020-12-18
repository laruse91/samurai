import React from 'react';
import './Sidebar.css'
import UserLabel from '../common/userLabel/UserLabel'
import Preloader from "../common/preloader/Preloader";
import {TUser} from "../../redux/types/types";

type TProps = {
    users: Array<TUser>
}
const Sidebar = (props: TProps) => {
    if (!props.users) {
        return <Preloader/>
    }
    const users = props.users.map(user => (<UserLabel key={user.id}
                                                      name={user.name}
                                                      id={user.id}
                                                      photo={user.photos.large}/>))
    return (
        <aside className="sidebar">
            {users}
        </aside>
    )
}

export default Sidebar;