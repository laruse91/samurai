import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authUser()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        userPhoto: state.auth.userPhoto
    }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
