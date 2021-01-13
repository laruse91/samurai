import {Popover} from 'antd'
import React from 'react'
import style from './AboutMe.module.css'

type TProps = {
    icon: string
    name: string
    path?: string | null
}

export const ProfileContact: React.FC<TProps> = (props) => {
    return (
        <div className={style.contact}>
            <div>
                <Popover content={props.path ? props.path : 'none'} trigger='hover' placement='topLeft'>
                    <a href={props.path ? props.path : '#'}>
                        <img src={props.icon} alt='ico'/>
                    </a>
                </Popover>
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}
