import {Popover} from 'antd'
import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './NavItem.module.css'

type TProps = {
    icon: string
    item: string
    path: string
}

export const NavItem: React.FC<TProps> = (props) => {

    return (
        <NavLink to={props.path} activeClassName={style.active}>
            <div className={style.navItem}>
                <Popover content={props.item} trigger='hover' placement='right'>
                    <img src={props.icon} alt='ico'/>
                </Popover>
                <span className={style.title}>{props.item}</span>
            </div>
        </NavLink>
    )
}
