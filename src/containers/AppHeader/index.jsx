import React from 'react'

import { useHistory } from 'react-router-dom'

import Header from 'components/Header'
import Navbar from 'components/Navbar'
import NavList from 'components/NavList'

export default () => {
    const history = useHistory()
    const navItems = [
        {
            id: '_home',
            title: 'Home',
            selected: false,
            action: () => history.push('/')
        },
        {
            id: '_resume',
            title: 'Resume',
            selected: false,
            action: () => history.push('/resume')
        },
        {
            id: '_works',
            title: 'Works',
            selected: false,
            action: () => history.push('/works')
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