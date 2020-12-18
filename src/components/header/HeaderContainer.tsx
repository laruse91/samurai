import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {TGlobalState} from "../../redux/redux-store";

type TStateProps = {
    isAuth: boolean
    login: string | null
    userId: number | null
    userPhoto: string | null
}
type TDispatchProps = {
    logout: () => void
}
type TProps = TStateProps & TDispatchProps

class HeaderContainer extends React.Component<TProps> {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        userPhoto: state.auth.userPhoto
    }
}

export default connect<TStateProps, TDispatchProps, null, TGlobalState>(mapStateToProps, {logout})(HeaderContainer);
