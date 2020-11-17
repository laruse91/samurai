import React from 'react'
import style from './DialogCard.module.css'
import {NavLink} from "react-router-dom"


const DialogCard = (props) => {
    let name = props.name
    let lastName = props.lastName
    let id = props.id
    let photo = props.photo

    let path = `/dialogs/${id}`

    return (
        <div className={style.dialogCard}>
            <NavLink to={path} activeClassName={style.active}>
                <hr/>

                <div className={style.dialog}>
                    <img src={photo} alt="ico"/>
                    <div className={style.user}>
                        <h3>{name} {lastName}</h3>
                        <span>my text</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogCard