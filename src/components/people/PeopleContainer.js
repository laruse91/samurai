import React from 'react';
import './People.module.css';
import People from "./People";
import {connect} from "react-redux";
import {
    follow, requestUsers, setCurrentPage,
    toggleIsFollowing, unfollow
} from "../../redux/people-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPage, followingInProgress, getUsers,
    isFetching, numberOfUsersOnPage, totalUsers
} from "../../redux/selectors";


class PeopleContainer extends React.Component {

    componentDidMount = () => {

        const {requestUsers, currentPage, numberOfUsersOnPage} = this.props
        requestUsers(currentPage, numberOfUsersOnPage, "SET");
    }

    getPeople = (newPageNumber, requestType) => {
        const {setCurrentPage, requestUsers, numberOfUsersOnPage} = this.props
        setCurrentPage(newPageNumber);
        requestUsers(newPageNumber, numberOfUsersOnPage, requestType);
    }

    render() {

        return (
            <People users={this.props.users}
                    totalUsers={this.props.totalUsers}
                    numberOfUsersOnPage={this.props.numberOfUsersOnPage}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    getPeople={this.getPeople}
                    isFetching={this.props.isFetching}
                    toggleIsFollowing={this.props.toggleIsFollowing}
                    followingInProgress={this.props.followingInProgress}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: currentPage(state),
        totalUsers: totalUsers(state),
        numberOfUsersOnPage: numberOfUsersOnPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state),
    }
};

export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, requestUsers, toggleIsFollowing}), withAuthRedirect)(PeopleContainer);