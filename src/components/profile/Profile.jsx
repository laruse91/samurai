import React from 'react';
import style from './Profile.module.css'
import Preloader from "../common/preloader/Preloader";


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profile}>
            <div className={style.header}>
                <div className={style.topSection}>
                    <img className={style.background} src={props.profile.background} alt="ico"/>
                    <div className={style.user}>
                        <img className={style.userPhoto} src={props.profile.photo} alt="ico"/>
                        <h3 className={style.userName}>{props.profile.name} {props.profile.lastName}</h3>
                    </div>
                </div>
                <div className={style.bottomSection}>
                    <div className={style.links}>
                        {props.profile.links.map((link, i) => {
                            return (
                                <img key={i + 1} src={link.ico} alt="ico"/>
                            )
                        })}
                    </div>
                    <div className={style.activityInfo}>
                        {props.profile.activityInfo.map((item, i) => {
                            return (
                                <div className={style.info} key={i + 1}>
                                    <p className={style.infoTitle}>{item.title}</p>
                                    <p className={style.infoCount}>{item.count}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;