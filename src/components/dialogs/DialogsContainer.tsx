import React from "react";
import './Dialogs.css';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {actions} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {TGlobalState} from "../../redux/redux-store";
import {TInitialStateMessage, TInitialStateUserType} from "../../types/types";


type TStateProps = {
    messages: Array<TInitialStateMessage>
    users: Array<TInitialStateUserType>
    isAuth: boolean
}
type TDispatchProps={
    sendNewMessage : (newMessageBody: string) => void
}

const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users,
        isAuth: state.auth.isAuth
    }
};

export default compose<React.ComponentType> (withAuthRedirect, connect<TStateProps, TDispatchProps, null, TGlobalState>(mapStateToProps, {sendNewMessage: actions.sendNewMessage}))(Dialogs)