import React, {useEffect} from 'react'
import style from './NewsFeedPage.module.css'
import {NewPostForm} from '../../components/posts/NewPostForm'
import {useDispatch, useSelector} from 'react-redux'
import {selectIsAuth, selectPostOwners, selectPosts} from '../../selectors/selectors'
import {PostBlock} from '../../components/posts/PostBlock'
import {getPostOwners} from '../../redux/posts-reducer'
import {OtherInfo} from '../profilePage/otherInfo/OtherInfo'
import {Skeleton} from 'antd'

export const NewsFeedPage = () => {

//useSelector Hook
    const isAuth = useSelector(selectIsAuth)
    const posts = useSelector(selectPosts)
    const postOwners = useSelector(selectPostOwners)

    const dispatch = useDispatch()

    useEffect(() => {
        let ids = Array.from(new Set(posts.map(post => post.userId)))
        dispatch(getPostOwners(ids))
    }, [])

    const usersPosts = posts.map(post => {
        if (postOwners.length === 0) {
            return <Skeleton key={post.id} active avatar paragraph={{rows: 2}}/>
        } else {
            const owner = postOwners.find(owner => owner.userId === post.userId)
            return (
                owner && <PostBlock key={post.id} post={post} userName={owner.name} userPhoto={owner.photo}/>)
        }
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
