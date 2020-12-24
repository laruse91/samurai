import React from 'react';
import style from './PostContentOptions.module.css'


type TProps = {
    likesCount: number
    shareCount: number
}
const PostContentOptions:React.FC<TProps> = (props) => {

    return (
        <div className={style.options}>
            <div className={style.option}>
                <img
                    src="https://4.downloader.disk.yandex.ru/preview/905151bbb2592bede8768d2b91209bf0662c4d48e167935acea2bd8636359127/inf/mI7F2KABYZfD3wspieAxRAMRQB5d97GMCIV7sZN-7l7Au19YmYLDh5nUwp6h8L4bpHhI4XNfMzihF6oJtivwUQ%3D%3D?uid=81903395&filename=like.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1349x625"
                    alt="ico"/>
                <span>{props.likesCount}</span>
                <span>Likes</span>
            </div>

            <div className={style.option}>
                <span>2</span>
                <span>Comments</span>
            </div>

            <div className={style.option}>
                <img
                    src="https://2.downloader.disk.yandex.ru/preview/21b552943c2dd038a58da7c284f2085cd0610cfd5fc7dc409080b76e87e4d514/inf/8wvwkb_T_CYyJ6aQ0XfnE2J4Imw0DFeONjYMxkfQ_5ziLflnEYfm3KdsrGSVqp9IpKs9FaK8y0onPo4Cc2v6yA%3D%3D?uid=81903395&filename=share.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1349x625"
                    alt="icon"/>
                <span>{props.shareCount}</span>
                <span>Share</span>
            </div>
        </div>

    )
}

export default PostContentOptions;