import React from 'react'
import './NewsFeedPage.css'
import PostBlock from './postBlock/PostBlock'
import NewPostBlock from './newPostBlock/NewPostBlock'

type TProps = {
    posts: any
    currentUser: any
    publicNewPost: (newPostBody: string) => void
}
const newsFeedPage = (props: TProps) => {

    const posts = props.posts
        .map((post: any) => <PostBlock key={post.id}
                                       user={post.user}
                                       content={post.content}
                                       contentMedia={post.contentMedia}
                                       likesCount={post.likesCount}
                                       shareCount={post.shareCount}/>)

    return (
            <div className='news-feed'>
                <NewPostBlock currentUser={props.currentUser}
                              publicNewPost={props.publicNewPost}/>
                {posts}
            </div>
    )
}

export default newsFeedPage