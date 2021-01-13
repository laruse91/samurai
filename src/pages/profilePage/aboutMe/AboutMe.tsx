import React from 'react'
import {Button} from '../../../components/common/button/Button'
import style from './AboutMe.module.css'
import {TProfile} from '../../../types/types'
import {ProfileContact} from './ProfileContact'

type TProps = {
    profile: TProfile
    activateEditMode: () => void
    isOwner: boolean
    profileContactsIcons: { [key: string]: string }
}

export const AboutMe: React.FC<TProps> = (props) => {

    return (
        <section className={style.aboutMe}>
            <div>
                <h3 className={style.title}>Basic information</h3>

                <div className={style.infBlock}>
                    <h4>About me</h4>
                    <p className={style.data}>{props.profile.aboutMe}</p>
                    {props.profile.lookingForAJob
                        ? <h4>Looking for a job : </h4>
                        : <h4>I am working as</h4>
                    }
                    <p className={style.data}>Front-end React developer</p>
                    <h4>Skills</h4>
                    <p className={style.data}>{props.profile.lookingForAJobDescription}</p>
                </div>
            </div>

            <div>
                <h3 className={style.title}>Contacts</h3>
                <div className={style.contacts}>
                    {Object.keys(props.profile.contacts)
                        .map((key) => {
                            return (
                                <ProfileContact
                                    key={key}
                                    icon={props.profileContactsIcons[key]}
                                    name={key}
                                    path={props.profile.contacts[key]}/>
                            )
                        })}
                </div>
            </div>

            <div className={style.button}>
                {props.isOwner &&
                <Button onClick={props.activateEditMode} button={'Edit profile information'}/>}
            </div>
        </section>
    )
}