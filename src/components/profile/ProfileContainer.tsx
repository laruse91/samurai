import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    saveUserPhoto,
    updateUserStatus,
    saveMyProfile
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {TProfile} from "../../redux/types/types";
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
    updateUserStatus: () => void
    getUserStatus: (userId: number) => void
    saveUserPhoto: () => void
    saveMyProfile: () => void
}
type TWithRouterProps = {
    match: any
    history: Array<string>
}
type TProps = TStateProps & TDispatchProps & TWithRouterProps

class ProfileContainer extends React.Component<TProps> {

    refreshProfile = () => {
        const {authorizedUserId, getUserStatus, getUserProfile} = this.props
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        getUserStatus(userId)
        getUserProfile(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any, prevState: any) {
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

// @ts-ignore
export default compose(connect<TStateProps, TDispatchProps, TWithRouterProps >(mapStateToProps, {
        getUserProfile, updateUserStatus, getUserStatus, saveUserPhoto, saveMyProfile
    }),
    withRouter)(ProfileContainer)