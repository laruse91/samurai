import React from 'react'
import style from './Preloader.module.css'

export const Preloader: React.FC = () => {
    return (
        <div className={style.preloader}>
            <div className={style.ripple}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}