import React from 'react'
import {TAboutMeFormData, ProfilePage} from './ProfilePage'
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
import {TProfile} from '../../types/types'
import {TGlobalState} from '../../redux/redux-store'

type TStateProps = {
    profile: TProfile | null
    status: string
    profileBackground: string
    authorizedUserId: number | null
    isAuth: boolean
    profileContacts: {[key: string]: string }
}
type TDispatchProps = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    saveUserPhoto: (file: File) => void
    saveMyProfile: (formData: TAboutMeFormData) => Promise<void>
}
// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    userId: string,
}
type TProps = TStateProps & TDispatchProps & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<TProps> {

    refreshProfile = () => {
        const {authorizedUserId, getUserStatus, getUserProfile} = this.props
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                this.props.history.push('/loginPage')
            }
        }
        getUserStatus(userId as number)
        getUserProfile(userId as number)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: TProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <ProfilePage profile={this.props.profile}
                         status={this.props.status}
                         background={this.props.profileBackground}
                         updateUserStatus={this.props.updateUserStatus}
                         isOwner={!this.props.match.params.userId}
                         saveUserPhoto={this.props.saveUserPhoto}
                         saveMyProfile={this.props.saveMyProfile}
                         profileContacts = {this.props.profileContacts}
            />
        )
    }
}

const mapStateToProps = (state: TGlobalState): TStateProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileBackground: state.graphics.background,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    profileContacts: state.graphics.profileContacts

})

export default compose<React.ComponentType>(connect(mapStateToProps, {
        updateUserStatus, getUserStatus, saveUserPhoto, saveMyProfile, getUserProfile
    }),
    withRouter)(ProfileContainer)