import React from 'react'
import style from './Auth.module.css'
import {NavLink} from 'react-router-dom'

const Auth = (props) => {
    const authPath = '/auth';
    const profilePath = `/profile/${props.userId}`
    return (
        <div className={style.auth}>
            {props.isAuth ?
                <NavLink to={profilePath} className={style.login}>
                    <img src={props.userPhoto} alt="ico"/>
                    <span>{props.login}</span>
                </NavLink>
                :
                <NavLink to={authPath} className={style.login}>
                    <img src="https://4.downloader.disk.yandex.ru/preview/2347468aa28117bbb170386d622519253fdbf993f839b2b4e2201df3f21077d1/inf/8VChwrmlzWviz--zGi1vNcXdWxHuS4K2MLRs2ukiOZddKTV_P4tsOv-Xyd7gVEJ5ZRV6qt4x2Z9kL9RwwOO4ZQ%3D%3D?uid=81903395&filename=login.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1349x568"
                        alt="ico"/>
                    <span>LogIn</span>
                </NavLink>
            }
        </div>
    )
}
export default Auth
