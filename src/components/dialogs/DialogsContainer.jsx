import React from 'react';
import './Dialogs.css';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {messageTextUpdateActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        users: state.dialogsPage.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        textUpdate: (text) => {
            dispatch(messageTextUpdateActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer