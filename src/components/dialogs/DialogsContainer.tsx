import './Dialogs.css';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {TGlobalState} from "../../redux/redux-store";
import {TInitialStateMessage, TInitialStateUserType} from "../../redux/types/types";

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

export default compose (withAuthRedirect, connect<TStateProps, TDispatchProps, null, TGlobalState>(mapStateToProps, {sendNewMessage}))(Dialogs)