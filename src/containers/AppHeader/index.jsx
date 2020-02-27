import React from 'react'

import Header from 'components/Header'
import Navbar from 'components/Navbar'
import NavList from 'components/NavList'

import { headerItems } from 'data/navigation.json'

export default () => {
    return (
        <Header>
            <Navbar>
                <NavList
                    items={headerItems}
                />
            </Navbar>
        </Header>
    )
}