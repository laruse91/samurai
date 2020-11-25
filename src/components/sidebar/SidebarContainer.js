import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
  return {
    users: state.sidebar.userData
  }
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer