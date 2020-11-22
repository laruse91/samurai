import React from 'react';
import './People.module.css';
import People from "./People";
import {connect} from "react-redux";
import {
    follow, setCurrentPage, setTotalUsers,
    setUsers, toggleIsFetching, unfollow
} from "../../redux/people-reducer";
import * as axios from "axios";


class PeopleContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.numberOfUsersOnPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data);
            });
        axios
            .get(`http://localhost:3000/mainInf`)
            .then(response => {
                this.props.setTotalUsers(response.data.totalUsers)
            });
    }

    changePage(newPageNumber) {
        this.props.setCurrentPage(newPageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`http://localhost:3000/users?_page=${newPageNumber}&_limit=${this.props.numberOfUsersOnPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data)
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
        isFetching: state.peoplePage.isFetching
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsers
})(PeopleContainer);