import React from 'react';
import style from './Profile.module.css'
import Preloader from "../common/preloader/Preloader";
import defaultUserPhoto from "../../assets/img/defaultUserPhoto.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const Profile = (props) => {

    const
        random = Math.round(1 + Math.random() * (props.backgrounds.length - 1));

   if (!props.profile) {return <Preloader/>}
    return (

        <div className={style.profile}>
            <div className={style.header}>
                <div className={style.topSection}>
                    <img className={style.background} src={props.backgrounds[random]} alt="ico"/>
                    <img className={style.userPhoto}
                         src={props.profile.photos.large != null
                             ? props.profile.photos.large
                             : defaultUserPhoto}
                         alt="ico"/>
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
                    <div>
                        <h3 className={style.userName}>{props.profile.fullName} {props.profile.lastName}</h3>
                    </div>
                    <div className={style.userStatus}>
                        <ProfileStatus status={props.status}
                                       updateUserStatus={props.updateUserStatus}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;