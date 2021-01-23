import React from 'react'
import style from './Logo.module.css'
import {Link} from 'react-router-dom'

export const Logo: React.FC = () => {
    const path = '/newsfeed'
    return (
        <div className={style.container}>
            <Link to={path} className={style.link}>
                <div className={style.logo}>
                    <span>S</span>
                    <div className={style.line}/>
                    <div className={style.circle}/>
                </div>
                <div className={style.title}>
                    <h1>Samurai</h1>
                    <p>Social network</p>
                </div>
            </Link>
        </div>
    )
}
