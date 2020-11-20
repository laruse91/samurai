import React from 'react';
import './NewsFeed.css'
import PostBlock from './postBlock/PostBlock';
import NewPostBlock from "./newPostBlock/NewPostBlock";

const newsFeed = (props) => {

    const posts = props.posts
        .map(post => <PostBlock key = {post.id}
                                user={post.user}
                                content={post.content}
                                contentMedia={post.contentMedia}
                                likesCount={post.likesCount}
                                shareCount={post.shareCount}
                                postComments={post.postComments}/>)

    return (
        <div>
            <div className="news-feed">
                <NewPostBlock currentUser={props.currentUser}
                              newPost={props.newPost}
                              textUpdate={props.textUpdate}
                              publicPost={props.publicPost}/>
                {posts}
            </div>
        </div>
    )
}

export default newsFeed;