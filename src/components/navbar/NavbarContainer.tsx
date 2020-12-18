import './Navbar.css';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {TGlobalState} from "../../redux/redux-store";
import {TNavItem} from "../../redux/types/types";

type TStateProps = {
    navItems: Array<TNavItem>
}
const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        navItems: state.navbar.navItems
    }
};

const NavbarContainer = connect<TStateProps, TGlobalState, null, TGlobalState>(mapStateToProps)(Navbar);

export default NavbarContainer