import React from 'react';
import './Navbar.css';
import Navbar from "./Navbar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        navItems: state.navbar.navItems
    }
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer