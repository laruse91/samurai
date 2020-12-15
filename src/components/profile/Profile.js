import React, {useState} from 'react';
import style from './Profile.module.css'
import Preloader from "../common/preloader/Preloader";
import defaultUserPhoto from "../../assets/img/defaultUserPhoto.jpg";
import ProfileStatus from "./profileStatus/ProfileStatus";
import AboutMe from "./aboutMe/AboutMe";
import AboutMeForm from "./aboutMe/AboutMeForm";

const Profile = (props) => {
    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => setEditMode(true)
    const onSubmit = (formData) => {
        props.saveMyProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    const saveUserPhoto = (event) => {
        event.target.files[0] &&
        props.saveUserPhoto(event.target.files[0])
    }

    const
        random = Math.round(1 + Math.random() * (props.backgrounds.length - 1));

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profile}>
            <div className={style.header}>
                <div className={style.topSection}>
                    <img className={style.background} src={props.backgrounds[random]} alt="ico"/>
                    <img className={style.userPhoto}
                         src={props.profile.photos.large || defaultUserPhoto}
                         alt="ico"/>
                    {props.isOwner &&
                    <div>
                        <input type="file" onChange={saveUserPhoto}
                               placeholder={props.profile.photos.large ? "Update photo" : "Download photo"}
                        />
                    </div>
                    }
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
            {!editMode
                ? <AboutMe fullName={props.profile.fullName}
                           lookingForAJob={props.profile.lookingForAJob}
                           lookingForAJobDescription={props.profile.lookingForAJobDescription}
                           contacts={props.profile.contacts}
                           activateEditMode={activateEditMode}
                           isOwner={props.isOwner}/>

                : <AboutMeForm
                    profile={props.profile}
                    initialValues={props.profile}
                    onSubmit={onSubmit}
                />
            }

        </div>
    )
}

export default Profile;


