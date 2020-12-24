import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {getUsers} from "../../redux/sidebar-reducer";
import {TUser} from "../../types/types";
import {TGlobalState} from "../../redux/redux-store";

type TStateProps = {
    users: Array<TUser>
    numberOfUsersAtSidebar: number
    totalUsers: number
}
type TDispatchProps = {
    getUsers: (randomPage: number, numberOfUsersAtSidebar: number) => void
}
type TOwnProps = {}
type TProps = TStateProps & TDispatchProps & TOwnProps

class SidebarContainer extends React.Component<TProps> {
    componentDidMount() {
        const totalPages = Math.ceil(this.props.totalUsers / this.props.numberOfUsersAtSidebar);
        const randomPage = Math.round(1 + Math.random() * (totalPages - 1));

        this.props.getUsers(randomPage, this.props.numberOfUsersAtSidebar)
    }

    render() {
        return <Sidebar users={this.props.users}/>
    }
}

const mapStateToProps = (state: TGlobalState) => {
    return {
        users: state.sidebar.users,
        numberOfUsersAtSidebar: state.sidebar.numberOfUsersAtSidebar,
        totalUsers: state.sidebar.totalUsers
    }
};

export default connect<TStateProps, TDispatchProps, TOwnProps, TGlobalState>(mapStateToProps, {getUsers})(SidebarContainer)