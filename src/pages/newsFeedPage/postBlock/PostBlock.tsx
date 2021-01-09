import React from 'react';
import style from './PostBlock.module.css'
import PostTitle from "./postTitle/PostTitle";
import PostContentText from "./postContentText/PostContentText";
import PostContentMedia from "./postContentMedia/PostContentMedia";
import PostContentOptions from "./postContentOptions/PostContentOptions";

type TProps = {
    user: any
    content: string
    contentMedia: number
    likesCount: number
    shareCount: number
}
const PostBlock: React.FC<TProps>=(props)=> {

        return (

            <div className={style.postBlock}>

                <PostTitle user={props.user}/>
                <div className={style.content}>
                    <PostContentText content={props.content}/>
                    <PostContentMedia/>
                    <PostContentOptions likesCount={props.likesCount}
                                        shareCount={props.shareCount}
                    />
                </div>
                <hr/>

            </div>
        )
}

export default PostBlock;