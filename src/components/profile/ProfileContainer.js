import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 12740
        }
        this.props.getUserStatus(userId)
        this.props.getUserProfile(userId)
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
})

export default compose(connect(mapStateToProps, {
        getUserProfile,
        updateUserStatus,
        getUserStatus,
    }),
    withRouter, withAuthRedirect)(ProfileContainer)