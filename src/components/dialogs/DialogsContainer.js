import React from 'react';
import './Dialogs.css';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users,
        isAuth: state.auth.isAuth
    }
};

export default compose (withAuthRedirect, connect(mapStateToProps, {sendNewMessage}))(Dialogs)