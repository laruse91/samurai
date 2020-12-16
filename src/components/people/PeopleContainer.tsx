import React from 'react';
import './People.module.css';
import People from "./People";
import {connect} from "react-redux";
import {
    follow, requestUsers, setCurrentPage, unfollow
} from "../../redux/people-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPage, followingInProgress, getUsers,
    isFetching, numberOfUsersOnPage, totalUsers
} from "../../redux/selectors";

import {TUser} from "../../redux/types/types";
import {TGlobalState} from "../../redux/redux-store";

type TStateProps = {
    users: Array<TUser>
    currentPage: number
    totalUsers: number
    numberOfUsersOnPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type TDispatchProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (newPageNumber: number) => void
    requestUsers: (currentPage: number, numberOfUsersOnPage: number, requestType: string) => void
}
//  type TOwnProps = { }
type TProps = TStateProps & TDispatchProps // & TOwnProps

class PeopleContainer extends React.Component<TProps> {

    componentDidMount = () => {

        const {requestUsers, currentPage, numberOfUsersOnPage} = this.props
        requestUsers(currentPage, numberOfUsersOnPage, "SET");
    }

    getPeople = (newPageNumber: number, requestType: string) => {
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
                    followingInProgress={this.props.followingInProgress}
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
    }
};

// @ts-ignore
export default compose(connect<TStateProps, TDispatchProps, TGlobalState>( mapStateToProps,
    {follow, unfollow, setCurrentPage, requestUsers,}),
    withAuthRedirect)(PeopleContainer);