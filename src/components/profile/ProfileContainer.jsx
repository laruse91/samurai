import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, postTextUpdate, publicPost} from "../../redux/profile-reducer";
import * as axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`http://localhost:3000/profile`)
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

export default connect(mapStateToProps, {setUserProfile, postTextUpdate, publicPost})(ProfileContainer)