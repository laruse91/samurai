import React from 'react';
import style from './NewPostBlock.module.css';
import NewPostReduxForm from "./NewPostForm";

export type TNewPostFormData = {
    newPostBody: string
}
type TProps = {
    publicNewPost: (newPostBody: string) => void
    currentUser: any
}

const NewPostBlock: React.FC<TProps> = (props) => {

    const publicNewPost = (values: TNewPostFormData) => {
        props.publicNewPost(values.newPostBody)
    };

    return (
        <div className={style.newPost}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>Create Post</h2>
            </div>
            <hr/>

            <div className={style.post}>
                <img src={props.currentUser.photo}
                     alt="ico"/>
                <NewPostReduxForm onSubmit={publicNewPost}/>
            </div>

            <hr/>
            <div className={style.optionsBlock}>
                <div className={style.options}>
                    <img
                        src="https://1.downloader.disk.yandex.ru/preview/b56e4cec9facf555580e8ea1d8b643cefaa68a0c70b3df074bcab5405e78595b/inf/AWTuIvbvUMY-TmrxYYbyMTp2SBuOTlRfkrsy3z5BMQFMkBdoQRrCRyHpaZxUPWoOhpeswR5CGxH6LJVBYb8JOw%3D%3D?uid=81903395&filename=image.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1263x577"
                        alt="ico"/>
                    <a href="#">Add media</a>
                </div>
                <div className={style.options}>
                    <img
                        src="https://1.downloader.disk.yandex.ru/preview/b417c6bd16f78d242d742770151b107cdcda359c59892b40d5c3ea9d3890de89/inf/A50BQnjbrDpzFV6OgdB4IwolLid69i7r8hhjvKb3fPNqNroqij0wdBgMSVLRSLo_w4mdYQFvbLlrYflnw4okCQ%3D%3D?uid=81903395&filename=face-recognition.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1263x577"
                        alt="ico"/>
                    <a href="#">Tag friend</a>
                </div>
                <div className={style.options}>
                    <img
                        src="https://4.downloader.disk.yandex.ru/preview/7890c74e83f2c0106bb09e8a2ebb4b66d52237290ca12a065a581a3333a775cc/inf/GJJZycv9mnnjhb7WDUbx--DzuThAwzXSyVs7QcS9F29dZ9ECTReZ4aPuBBe9tOEx_IYfm3AZaVCtgb5iMQjbvA%3D%3D?uid=81903395&filename=placeholder.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1263x577"
                        alt="ico"/>
                    <a href="#">Add location</a>
                </div>
            </div>
        </div>
    )
}

export default NewPostBlock;