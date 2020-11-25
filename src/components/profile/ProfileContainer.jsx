import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, postTextUpdate, publicPost} from "../../redux/profile-reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        const userId = this.props.match.params.userId
        axios
            .get(`http://localhost:3000/users/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
const WithURLProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, postTextUpdate, publicPost})(WithURLProfileContainer)