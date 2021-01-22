import React, {ChangeEvent, useEffect, useState} from 'react'
import style from './ProfilePage.module.css'
import {Preloader} from '../../components/common/preloader/Preloader'
import {ProfileStatus} from './profileStatus/ProfileStatus'
import {AboutMe} from './aboutMe/AboutMe'
import AboutMeReduxForm from './aboutMe/AboutMeForm'
import {styles} from '../../styles/styles'
import {Avatar, Image} from 'antd'
import {OtherInfo} from './otherInfo/OtherInfo'
import {NewPostForm} from '../../components/posts/NewPostForm'
import {useSelector} from 'react-redux'
import {
    selectPosts,
    selectProfile,
    selectProfileContactsIcons,
    selectProfileStatus,
    selectRandomBackground
} from '../../selectors/selectors'
import {PostBlock} from '../../components/posts/PostBlock'
import {TPost} from '../../redux/posts-reducer'


type TProps = {
    isOwner: boolean
    updateUserStatus: (status: string) => void
    saveUserPhoto: (file: File) => void
    saveMyProfile: (formData: TAboutMeFormData) => Promise<void>

}
export type TAboutMeFormData = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    contacts: { [key: string]: string | null }
}

export const ProfilePage: React.FC<TProps> = React.memo((props) => {
    //useSelector Hook
    const posts = useSelector(selectPosts)
    const profile = useSelector(selectProfile)
    const profileStatus = useSelector(selectProfileStatus)
    const profileContactsIcons = useSelector(selectProfileContactsIcons)
    const background = useSelector(selectRandomBackground)

//useState Hook
    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => setEditMode(true)

    const [myPosts, setMyPost] = useState([] as TPost[])
    useEffect(() => {
        profile &&
        setMyPost(posts.filter(post => post.userId === profile.userId))
    }, [profile, posts])

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
            aboutMe: profile?.aboutMe,
            lookingForAJob: profile?.lookingForAJob,
            lookingForAJobDescription: profile?.lookingForAJobDescription,
            fullName: profile?.fullName,
            contacts: profile?.contacts

        }
    }

    const saveUserPhoto = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.files?.length && props.saveUserPhoto(event.target.files[0])
    }

    const usersPosts = myPosts.length > 0 && myPosts.map(post => {
        return (
            profile && <PostBlock key={post.id} post={post}
                                  userName={profile.fullName}
                                  userPhoto={profile.photos.large}/>)

    })

    if (!profile) {
        return <div className={style.profile}><Preloader/></div>
    }

    return (
        <div className={style.profile}>
            <section className={style.userInfo}>
                <div className={style.topSection}>
                    <img className={style.background} src={background} alt='ico'/>

                    <div className={style.userPhoto}>
                        {profile.photos.large
                            ? <Avatar size={120} src={<Image src={profile.photos.large}/>}/>
                            : <Avatar size={120} style={styles.avatar}
                                      className={style.userPhoto}>{profile.fullName ? profile.fullName.charAt(0).toUpperCase() : 'User'}</Avatar>
                        }
                    </div>
                    <h1 className={style.userName}>{profile.fullName}</h1>
                </div>

                <div className={style.bottomSection}>
                    <ProfileStatus status={profileStatus} isOwner={props.isOwner}
                                   updateUserStatus={props.updateUserStatus}/>
                    <div className={style.photoInput}>
                        {editMode &&
                        <input type='file' onChange={saveUserPhoto} className={style.input}
                               placeholder={profile.photos.large
                                   ? 'Update photo'
                                   : 'Download photo'}/>
                        }
                    </div>
                </div>
            </section>

            {!editMode
                ? <AboutMe profile={profile}
                           activateEditMode={activateEditMode}
                           isOwner={props.isOwner}
                           profileContactsIcons={profileContactsIcons}/>

                : <AboutMeReduxForm
                    profile={profile}
                    onSubmit={onSubmit}
                    initialValues={getInitialValues()}
                />
            }

            <section className={style.activity}>
                <div><OtherInfo/></div>
                <div className={style.posts}>
                    {props.isOwner && <NewPostForm/>}
                    {myPosts.length === 0 ? null : usersPosts}

                </div>
            </section>
        </div>
    )
})



