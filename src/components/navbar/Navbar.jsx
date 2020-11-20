import React from 'react'
import './Navbar.css'
import NavItem from "./navItem/NavItem"

const Navbar = (props) => {

    const navItems = props.navItems
        .map(navItem => (<NavItem key ={navItem.id}
                                  item={navItem.item}
                                  img={navItem.img}
                                  path={navItem.path}/>))

    return (
        <nav className="nav">
            {navItems}
        </nav>
    )
}
export default Navbar