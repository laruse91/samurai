import React from 'react';
import style from './PostTitle.module.css';
import UserLabel from "../../../common/userLabel/UserLabel";


const PostTitle = (props) => {

    return (
        <div className={style.title}>
            <UserLabel name={props.user.name}
                       lastName={props.user.lastName}
                       photo={props.user.photo}/>
            <div className={style.userAction}>
                <span className={style.action}>Added new post</span>
            </div>
            <div className={style.dropDown}>
                <img
                    src="https://1.downloader.disk.yandex.ru/preview/db2dd8b1c30a5c3f334d3ecc71f1cb465968ff49ca5ba9e802a5d040acefb61b/inf/XfB60ENh6xBD-pVVRFRf0oFhjPhj2ysFi_ybQPJ7XLKGrm30rBW-TM395rpotuRZCueBoKbQ-R0VhKfM3we87Q%3D%3D?uid=81903395&filename=more.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1349x625"
                    alt="ico"/>
            </div>
        </div>
    )
}

export default PostTitle;