import React, {useEffect} from 'react'
import style from './NewsFeedPage.module.css'
import {NewPostForm} from '../../components/posts/NewPostForm'
import {useDispatch, useSelector} from 'react-redux'
import {selectIsAuth, selectPostOwners, selectPosts} from '../../selectors/selectors'
import {PostBlock} from '../../components/posts/PostBlock'
import {requestPosts} from '../../redux/posts-reducer'
import {OtherInfo} from '../profilePage/otherInfo/OtherInfo'
import {Skeleton} from 'antd'

export const NewsFeedPage = () => {

//useSelector Hook
    const isAuth = useSelector(selectIsAuth)
    const posts = useSelector(selectPosts)
    const postOwners = useSelector(selectPostOwners)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestPosts())
    }, [])

    const usersPosts = posts.map(p => {
        if (!postOwners) {
            return <Skeleton key={p.id} active avatar paragraph={{rows: 2}}/>
        }
            return (
                <PostBlock key={p.id} post={p} userName={postOwners[p.userId].name}
                           userPhoto={postOwners[p.userId].photo}/>)

    })

    return (
        <div className={style.newsFeed}>
            <div className={style.posts}>
                {isAuth && <NewPostForm/>}
                {usersPosts}
            </div>
            <div><OtherInfo/></div>

        </div>
    )
}
