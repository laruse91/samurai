import React from 'react'
import './Navbar.css'
import {NavItem} from './NavItem'
import {selectNavItems} from '../../redux/selectors'
import {useSelector} from 'react-redux'

export const Navbar: React.FC = () => {
//useSelectorHook
    const navItems = useSelector(selectNavItems)

    const navigation = navItems
        .map(navItem => (<NavItem key={navItem.id}
                                  item={navItem.item}
                                  icon={navItem.icon}
                                  path={navItem.path}/>))

    return (
        <nav className='nav'>
            {navigation}
        </nav>
    )
}