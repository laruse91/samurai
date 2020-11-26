import React from 'react';
import './People.module.css';
import People from "./People";
import {connect} from "react-redux";
import {
    follow, setCurrentPage, setTotalUsers,
    setUsers, toggleIsFetching, toggleIsFollowing, unfollow
} from "../../redux/people-reducer";
import {usersAPI} from "../../api/api";


class PeopleContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.numberOfUsersOnPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setTotalUsers(data.totalCount);
                this.props.setUsers(data.items);
            });
    }

    changePage(newPageNumber) {
        this.props.setCurrentPage(newPageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(newPageNumber, this.props.numberOfUsersOnPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })
    }

    render() {

        return (
            <People users={this.props.users}
                    totalUsers={this.props.totalUsers}
                    numberOfUsersOnPage={this.props.numberOfUsersOnPage}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    changePage={this.changePage}
                    isFetching={this.props.isFetching}
                    setCurrentPage = {this.props.setCurrentPage}
                    toggleIsFollowing = {this.props.toggleIsFollowing}
                    followingInProgress = {this.props.followingInProgress}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users,
        currentPage: state.peoplePage.currentPage,
        totalUsers: state.peoplePage.totalUsers,
        numberOfUsersOnPage: state.peoplePage.numberOfUsersOnPage,
        isFetching: state.peoplePage.isFetching,
        followingInProgress: state.peoplePage.followingInProgress,
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsers,
    toggleIsFollowing
})(PeopleContainer);