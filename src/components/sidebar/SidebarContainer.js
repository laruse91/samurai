import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

import {setTotalUsers, setUsers} from "../../redux/sidebar-reducer";
import {usersAPI} from "../../api/api";


class SidebarContainer extends React.Component {
    componentDidMount() {
        const totalPages = Math.ceil(this.props.totalUsers / this.props.numberOfUsersAtSidebar);
        const randomPage = Math.round(1 + Math.random() * (totalPages - 1));

        usersAPI.getUsers(randomPage, this.props.numberOfUsersAtSidebar)
            .then(data => {
                this.props.setTotalUsers(data.totalCount);
                this.props.setUsers(data.items);
            })
    }

    render() {
        return (
            <Sidebar users={this.props.users}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.sidebar.users,
        numberOfUsersAtSidebar: state.sidebar.numberOfUsersAtSidebar,
        totalUsers: state.sidebar.totalUsers
    }
};
export default connect(mapStateToProps, {setTotalUsers, setUsers})(SidebarContainer)