import React from 'react';
import './People.module.css';
import People from "./People";
import {connect} from "react-redux";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPage
} from "../../redux/people-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users,
        currentPage: state.peoplePage.currentPage,
        totalPages: state.peoplePage.totalPages,
        numberOfUsersOnPage: state.peoplePage.numberOfUsersOnPage
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
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        }

    };
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;