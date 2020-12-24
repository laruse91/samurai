import './Navbar.css';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {TGlobalState} from "../../redux/redux-store";
import {TNavItem} from "../../types/types";

type TStateProps = {
    navItems: Array<TNavItem>
}
type TDispatchProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type TOwnProps = {}
// type TProps = TStateProps & TDispatchProps & TOwnProps

const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        navItems: state.navbar.navItems
    }
};

const NavbarContainer = connect<TStateProps, TDispatchProps, TOwnProps, TGlobalState>(mapStateToProps)(Navbar);

export default NavbarContainer