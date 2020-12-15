import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, saveUserPhoto, updateUserStatus, saveMyProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId)
        {this.refreshProfile()}
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     backgrounds={this.props.profileBackgrounds}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.match.params.userId}
                     saveUserPhoto = {this.props.saveUserPhoto}
                     saveMyProfile = {this.props.saveMyProfile}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileBackgrounds: state.graphics.backgrounds,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose(connect(mapStateToProps, {
        getUserProfile, updateUserStatus, getUserStatus, saveUserPhoto, saveMyProfile
    }),
    withRouter)(ProfileContainer)