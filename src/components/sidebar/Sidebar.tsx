import React, {useEffect} from 'react'
import '../../App.css'
import {UserLabel} from '../common/userLabel/UserLabel'
import {Preloader} from '../common/preloader/Preloader'
import {selectFollowedUsers, selectIsAuth, selectNumberOfUsersAtSidebar, selectPageNumber} from '../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {requestFollowedUsers} from '../../redux/sidebar-reducer'


export const Sidebar: React.FC = React.memo(() => {
// useSelector Hook
    const users = useSelector(selectFollowedUsers)
    const numberOfUsersAtSidebar = useSelector(selectNumberOfUsersAtSidebar)
    const pageNumber = useSelector(selectPageNumber)
    const isAuth = useSelector(selectIsAuth)

// useDispatch Hook
    const dispatch = useDispatch()

// useEffect Hook

    useEffect(() => {
        dispatch(requestFollowedUsers(pageNumber, numberOfUsersAtSidebar))
    }, [isAuth])

    const userLabels = users && users.map(user => (<UserLabel key={user.id} userName={user.name} userId={user.id} photo={user.photos.large} info={user.status}/>))

    if (!users) {
        return <Preloader/>
    }
    return (
        <aside className='sidebar'>
            {userLabels}
        </aside>
    )
})

