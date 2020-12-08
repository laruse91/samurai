import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {authorizedUserId,getUserStatus, getUserProfile} = this.props
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

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     backgrounds={this.props.profileBackgrounds}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileBackgrounds: state.graphics.backgrounds,
    authorizedUserId : state.auth.userId,
    isAuth : state.auth.isAuth
})

export default compose(connect(mapStateToProps, {
        getUserProfile,
        updateUserStatus,
        getUserStatus,
    }),
    withRouter)(ProfileContainer)