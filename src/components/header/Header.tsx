import React from 'react'
import style from './Header.module.css'
import {Auth} from '../common/auth/Auth'

export const Header: React.FC = () => {

    return (
        <header className={style.header}>
            <div className={style.titleBlock}>
                <img src='https://iqonic.design/themes/socialv/html/images/logo.png' alt='logo' className={style.logo}/>
                <h1 className={style.title}>Social Page</h1>
            </div>
            <Auth/>
        </header>
    )
}
