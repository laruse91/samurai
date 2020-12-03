import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {getUsersSB} from "../../redux/sidebar-reducer";

class SidebarContainer extends React.Component {
    componentDidMount() {
        const totalPages = Math.ceil(this.props.totalUsers / this.props.numberOfUsersAtSidebar);
        const randomPage = Math.round(1 + Math.random() * (totalPages - 1));

        this.props.getUsersSB(randomPage, this.props.numberOfUsersAtSidebar)
    }
    render () {
        return <Sidebar users={this.props.users}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.sidebar.users,
        numberOfUsersAtSidebar: state.sidebar.numberOfUsersAtSidebar,
        totalUsers: state.sidebar.totalUsers
    }
};
export default connect(mapStateToProps, {getUsersSB})(SidebarContainer)