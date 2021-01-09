import React from 'react';
import style from './PostContentText.module.css'

type TProps = {
    content: string
}
const PostContentText: React.FC<TProps> = (props) => {

    return (
        <div className={style.contentText}>
            <p>
                {props.content}
            </p>
        </div>

    )
}

export default PostContentText;