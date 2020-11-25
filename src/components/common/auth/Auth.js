import React from 'react'
import style from './Auth.module.css'
import {NavLink} from 'react-router-dom'

const Auth = () => {
    const path = '/auth';
    return (
        <div className={style.auth}>
            <NavLink to={path} className={style.login}>
                <img src="https://4.downloader.disk.yandex.ru/preview/2347468aa28117bbb170386d622519253fdbf993f839b2b4e2201df3f21077d1/inf/8VChwrmlzWviz--zGi1vNcXdWxHuS4K2MLRs2ukiOZddKTV_P4tsOv-Xyd7gVEJ5ZRV6qt4x2Z9kL9RwwOO4ZQ%3D%3D?uid=81903395&filename=login.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1349x568" alt="ico"/>
                <span>LogIn</span>
            </NavLink>
        </div>
    )
}
export default Auth


//     <img src= alt="ico" className={style.userPhoto}/>
// <h3 className={style[`user-name`]}>Helena Jackly</h3>
// <div className={style.notifications}>
//     <img src="https://2.downloader.disk.yandex.ru/preview/b7d86c92043fa44debebfaee432c8a8a74fae20d882e251447c642dc93c673ab/inf/KkmhsvGCHdjV3lAnGzTQ52J4Imw0DFeONjYMxkfQ_5zk7GlOkZWipEH5q3AkYjTLGwW1m-8qdBKKYY_ABTSzgQ%3D%3D?uid=81903395&filename=notification.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510" alt="ico" className={style[`notifications-ico`]}/>
//     <img src="https://3.downloader.disk.yandex.ru/preview/5595eae009965b06c1708ceba3ba694872738bad8c39b1b394de5581fe193a13/inf/6tjzYEKgjL5IQbugMvQu7-34X5PFwn5JNXdKHJPp3HAspSnjlAhWXmwsenpPs6RbRKfzonTpTNvEUcyPL9-PXg%3D%3D?uid=81903395&filename=messages.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510" alt="ico" className={style[`notifications-ico`]}/>
//     <img src="https://3.downloader.disk.yandex.ru/preview/ec118e9e9529907fb4d7ba08b11aa3bc51c4b9b2d22f0df409013dca2158a170/inf/svHeM24Y-uY3FdllcP-kjYFhjPhj2ysFi_ybQPJ7XLLXCn3B9ZYzHfD_WUZRPc1JLxsfuEkczNpaCrl8SzFw-Q%3D%3D?uid=81903395&filename=down-arrow.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510" alt="ico" className={style[`notifications-ico`]}/>
// </div>
