import React from 'react'
import {NavLink} from "react-router-dom"
import style from './NavItem.module.css'

class NavItem extends React.Component {

    render() {
        let img = this.props.img
        let item = this.props.item
        let path = this.props.path

        return (

            <NavLink to={path} activeClassName={style.active}>
                <div className={style.navItem}>
                    <img src={img} alt="ico"/>
                    <span className={style.title}>{item}</span>
                </div>
            </NavLink>

        )
    }
}

export default NavItem