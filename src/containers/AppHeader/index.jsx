import React from 'react'

import Header from 'components/Header'
import Navbar from 'components/Navbar'
import NavList from 'components/NavList'

export default () => {
    const navItems = [
        {
            id: '_home',
            title: 'Home',
            href: '/'
        },
        {
            id: '_resume',
            title: 'Resume',
            href: '/resume'
        },
        {
            id: '_works',
            title: 'Works',
            href: '/works'
        }
    ]

    return (
        <Header>
            <Navbar>
                <NavList
                    items={navItems}
                />
            </Navbar>
        </Header>
    )
}