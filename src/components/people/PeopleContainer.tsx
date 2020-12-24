import React from 'react';
import './People.module.css';
import People from "./People";
import {connect} from "react-redux";
import {follow, requestUsers, TFilter, unfollow} from "../../redux/people-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPage,
    followingInProgress,
    getFilter,
    getUsers,
    isFetching,
    numberOfUsersOnPage,
    totalUsers
} from "../../redux/selectors";

import {TUser} from "../../types/types";
import {TGlobalState} from "../../redux/redux-store";

type TStateProps = {
    users: Array<TUser>
    currentPage: number
    totalUsers: number
    numberOfUsersOnPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    filter: TFilter
}
type TDispatchProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (currentPage: number, numberOfUsersOnPage: number, requestType: string, term: string) => void
}
type TOwnProps = {}
type TProps = TStateProps & TDispatchProps & TOwnProps

class PeopleContainer extends React.Component<TProps> {

    componentDidMount = () => {
        const {requestUsers, currentPage, numberOfUsersOnPage} = this.props
        requestUsers(currentPage, numberOfUsersOnPage, "SET", '');
    }
    getPeople = (newPageNumber: number, requestType: string) => {
        const {requestUsers, numberOfUsersOnPage, filter} = this.props
        requestUsers(newPageNumber, numberOfUsersOnPage, requestType, filter.term);
    }
    onFilterChange =(filter: TFilter)=>{
        const {requestUsers, numberOfUsersOnPage} = this.props
        requestUsers(1, numberOfUsersOnPage, "SET", filter.term);
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
                    followingInProgress={this.props.followingInProgress}
                    onFilterChange = {this.onFilterChange}
            />
        )
    }
}

const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        users: getUsers(state),
        currentPage: currentPage(state),
        totalUsers: totalUsers(state),
        numberOfUsersOnPage: numberOfUsersOnPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state),
        filter: getFilter(state)
    }
};

export default compose<React.ComponentType>(connect<TStateProps, TDispatchProps, TOwnProps, TGlobalState>(mapStateToProps,
    {follow, unfollow, requestUsers,}),
    withAuthRedirect)(PeopleContainer);