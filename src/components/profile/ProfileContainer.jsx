import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, postTextUpdate, publicPost} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId

        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     backgrounds={this.props.profileBackgrounds}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileBackgrounds: state.graphics.profileBackgrounds,
})
const WithURLProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, postTextUpdate, publicPost})(WithURLProfileContainer)