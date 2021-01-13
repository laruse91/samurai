import React from 'react'
import style from './PostBlock.module.css'
import {UserLabel} from '../common/userLabel/UserLabel'
import {TPost} from '../../redux/posts-reducer'
import { Carousel } from 'antd'

type TProps = {
    post: TPost
    userName: string
    userPhoto: string | null
}

export const PostBlock: React.FC<TProps> = (props) => {

    const images = props.post.images && props.post.images.map((imgPath, i) => {
        return (
            <div key={i + 1}>
                <img key={i + 1} src={imgPath} alt='ico' className={style.img}/>
            </div>
        )
    })

    return (
        <div className={style.postBlock}>
            <div className={style.title}>
                <UserLabel userId={props.post.userId} userName={props.userName} photo={props.userPhoto} info={'Front-End developer'}/>

                <span className={style.action}>Added new post</span>
            </div>

            <div className={style.post}>
                <p>{props.post.postBody}</p>
            </div>

            {props.post.images
                ? <div className={style.layer}>
                    <Carousel className={style.carousel}>
                        {images}
                    </Carousel>
                </div>
                : null
            }
        </div>
    )
}

