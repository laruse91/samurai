import React from 'react'
import './Navbar.css'
import NavItem from "./navItem/NavItem"
import {TNavItem} from "../../types/types";

type TProps = {
    navItems: Array<TNavItem>
}

const Navbar = (props: TProps) => {

    const navItems = props.navItems
        .map(navItem => (<NavItem key ={navItem.id}
                                  item={navItem.item}
                                  icon={navItem.icon}
                                  path={navItem.path}/>))

    return (
        <nav className="nav">
            {navItems}
        </nav>
    )
}
export default Navbar