import React from 'react'
import '../../App.css'
import {Auth} from '../auth/Auth'
import {Logo} from '../common/logo/Logo'

export const Header: React.FC = () => {

    return (
        <header className='header'>
            <Logo/>
            <Auth/>
        </header>
    )
}
