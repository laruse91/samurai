import React from 'react';
import './People.css';
import People from "./People";
import {connect} from "react-redux";
import {followActionCreator,unfollowActionCreator, setUsersActionCreator} from "../../redux/people-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users)=> {
            dispatch(setUsersActionCreator(users))
        },
    };
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;