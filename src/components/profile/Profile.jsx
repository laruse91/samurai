import React from 'react';
import style from './Profile.module.css'
import Preloader from "../common/preloader/Preloader";
import defaultUserPhoto from "../../assets/img/defaultUserPhoto.jpg";


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const random = Math.round(1 + Math.random() * (props.backgrounds.length - 1));
    return (
        <div className={style.profile}>
            <div className={style.header}>
                <div className={style.topSection}>
                    <img className={style.background} src={props.backgrounds[random]} alt="ico"/>
                    <div className={style.user}>
                        <img className={style.userPhoto}
                             src={props.profile.photos.large != null
                                 ? props.profile.photos.large
                                 : defaultUserPhoto}
                             alt="ico"/>
                        <h3 className={style.userName}>{props.profile.fullName} {props.profile.lastName}</h3>
                    </div>
                </div>
                <div className={style.bottomSection}>
                    <div className={style.links}>
                        links here
                        {/*{props.profile.contacts.map((link, i) => {*/}
                        {/*    return (*/}
                        {/*        <a key={i + 1} href={link.path}>*/}
                        {/*            <img src={link.ico} alt="ico"/>*/}
                        {/*        </a>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </div>
                    <div className={style.activityInfo}>
                        {/*{props.profile.activityInfo.map((item, i) => {*/}
                        {/*    return (*/}
                        {/*        <div className={style.info} key={i + 1}>*/}
                        {/*            <p className={style.infoTitle}>{item.title}</p>*/}
                        {/*            <p className={style.infoCount}>{item.count}</p>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;