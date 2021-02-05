import React from 'react'
import {ProfilePage, TAboutMeFormData} from './ProfilePage'
import {connect} from 'react-redux'
import {
    getUserProfile,
    getUserStatus,
    saveMyProfile,
    saveUserPhoto,
    updateUserStatus
} from '../../redux/profile-reducer'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {TGlobalState} from '../../redux/store'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {requestPosts} from '../../redux/posts-reducer'

type TStateProps = {
    authorizedUserId: number | null
}
type TDispatchProps = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    saveUserPhoto: (file: File) => void
    saveMyProfile: (formData: TAboutMeFormData) => Promise<void>
    requestPosts: ()=>void
}
// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    userId: string,
}
type TProps = TStateProps & TDispatchProps & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<TProps> {

    refreshProfile = () => {
        const {authorizedUserId, getUserStatus, getUserProfile, requestPosts} = this.props
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        getUserStatus(userId as number)
        getUserProfile(userId as number)
        requestPosts()
    }

    componentDidMount() {
        this.refreshProfile()
        requestPosts()
    }

    componentDidUpdate(prevProps: TProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <ProfilePage updateUserStatus={this.props.updateUserStatus}
                         isOwner={+this.props.match.params.userId === this.props.authorizedUserId || !this.props.match.params.userId}
                         saveUserPhoto={this.props.saveUserPhoto}
                         saveMyProfile={this.props.saveMyProfile}
            />
        )
    }
}

const mapStateToProps = (state: TGlobalState): TStateProps => ({
    authorizedUserId: state.auth.authorizedUser.userId
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
        updateUserStatus, getUserStatus, saveUserPhoto, saveMyProfile, getUserProfile, requestPosts
    }),
    withRouter, withAuthRedirect)(ProfileContainer)