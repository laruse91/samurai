import React from 'react'
import style from './aboutMe/AboutMe.module.css'

type TProps = {
    icon: string
    name: string
    path?: string | null
}

export const ProfileContact: React.FC<TProps> = (props) => {
    return (
        <div className={style.contact}>
            <div>
                <a href={props.path ? props.path: '#'} >
                    <img src={props.icon} alt='ico'/>
                </a>
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}
