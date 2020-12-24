import React from 'react';
import Profile, {AboutMeFormData} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    saveUserPhoto,
    updateUserStatus,
    saveMyProfile
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {TProfile} from "../../types/types";
import {TGlobalState} from "../../redux/redux-store";

type TStateProps = {
    profile: TProfile | null
    status: string
    profileBackgrounds: Array<string>
    authorizedUserId: number | null
    isAuth: boolean
}
type TDispatchProps = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    saveUserPhoto: (file: File) => void
    saveMyProfile: (formData: AboutMeFormData) => Promise<void>
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
                this.props.history.push("/login")
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
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     backgrounds={this.props.profileBackgrounds}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.match.params.userId}
                     saveUserPhoto={this.props.saveUserPhoto}
                     saveMyProfile={this.props.saveMyProfile}
            />
        )
    }
}

const mapStateToProps = (state: TGlobalState): TStateProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileBackgrounds: state.graphics.backgrounds,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose<React.ComponentType>(connect(mapStateToProps, {
        updateUserStatus, getUserStatus, saveUserPhoto, saveMyProfile, getUserProfile
    }),
    withRouter)(ProfileContainer)