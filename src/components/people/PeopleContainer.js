import React from 'react';
import './People.module.css';
import People from "./People";
import {connect} from "react-redux";
import {
    follow, getUsers, setCurrentPage, setTotalUsers,
    setUsers, toggleIsFetching, toggleIsFollowing, unfollow
} from "../../redux/people-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class PeopleContainer extends React.Component {

    componentDidMount=() =>{
        this.props.getUsers(this.props.currentPage, this.props.numberOfUsersOnPage);
    }

    changePage = (newPageNumber) => {
        this.props.setCurrentPage(newPageNumber);
        this.props.getUsers(newPageNumber, this.props.numberOfUsersOnPage);
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
                    toggleIsFollowing={this.props.toggleIsFollowing}
                    followingInProgress={this.props.followingInProgress}
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

export default compose(connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, getUsers,
    toggleIsFetching, setTotalUsers, toggleIsFollowing,
}),withAuthRedirect)(PeopleContainer);