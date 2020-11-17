import React from 'react';
import style from './PostContentText.module.css'


const PostContentText = (props) => {

    return (
        <div className={style.contentText}>
            <p>
                {props.content}
            </p>
        </div>

    )
}

export default PostContentText;