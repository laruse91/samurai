import React, {ChangeEvent, useState} from 'react'
import style from './ProfilePage.module.css'
import {Preloader} from '../../components/common/preloader/Preloader'
import ProfileStatus from './profileStatus/ProfileStatus'
import {AboutMe} from './aboutMe/AboutMe'
import AboutMeReduxForm from './aboutMe/AboutMeForm'
import {TProfile} from '../../types/types'
import {styles} from '../../styles/styles'
import {Avatar, Image} from 'antd'

type TProps = {
    profile: TProfile | null
    status: string
    isOwner: boolean
    background: string
    updateUserStatus: (status: string) => void
    saveUserPhoto: (file: File) => void
    saveMyProfile: (formData: TAboutMeFormData) => Promise<void>
    profileContacts: { [key: string]: string }
}
export type TAboutMeFormData = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    contacts: { [key: string]: string | null }
}

export const ProfilePage: React.FC<TProps> = (props) => {

//useState Hook
    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => setEditMode(true)

//submit to redux-form
    const onSubmit = (formData: TAboutMeFormData) => {
        //todo: remove then
        props.saveMyProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    //initialValues for redux-form
    const getInitialValues = () => {
        let initialValues = {}
        return initialValues = {
            aboutMe: props.profile?.aboutMe,
            lookingForAJob: props.profile?.lookingForAJob,
            lookingForAJobDescription: props.profile?.lookingForAJobDescription,
            fullName: props.profile?.fullName,
            contacts: props.profile?.contacts

        }
    }

    const saveUserPhoto = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.files?.length && props.saveUserPhoto(event.target.files[0])
    }

    if (!props.profile) {
        return <Preloader/>
    }
//todo: avatar TS

    return (
        <div className={style.profile}>
            <section className={style.userInfo}>
                <div className={style.topSection}>
                    <img className={style.background} src={props.background} alt='ico'/>

                    <div className={style.userPhoto}>
                        {props.profile.photos.large
                            // @ts-ignore
                            ? <Avatar size={120} src={<Image src={props.profile.photos.large}/>}/>
                            // @ts-ignore
                            : <Avatar size={120} style={styles.avatar}
                                      className={style.userPhoto}>{props.profile.fullName.charAt(0).toUpperCase()}</Avatar>
                        }
                    </div>
                    <h1 className={style.userName}>{props.profile.fullName}</h1>
                </div>

                <div className={style.bottomSection}>
                    <ProfileStatus status={props.status}
                                   updateUserStatus={props.updateUserStatus}/>
                    <div className={style.photoInput}>
                        {editMode &&
                        <input type='file' onChange={saveUserPhoto} className={style.input}
                               placeholder={props.profile.photos.large
                                   ? 'Update photo'
                                   : 'Download photo'}/>
                        }
                    </div>
                </div>
            </section>

            {!editMode
                ? <AboutMe profile={props.profile}
                           activateEditMode={activateEditMode}
                           isOwner={props.isOwner}
                           profileContacts={props.profileContacts}/>

                : <AboutMeReduxForm
                    profile={props.profile}
                    onSubmit={onSubmit}
                    initialValues={getInitialValues()}
                />
            }
        </div>
    )
}



