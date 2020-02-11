import React from 'react'

import Header from 'components/Header'
import Navbar from 'components/Navbar'
import NavList from 'components/NavList'

export default () => {
    return (
        <Header>
            <Navbar>
                <NavList
                    items={
                        [
                            {
                                id: '_home',
                                title: 'Home',
                                selected: true,
                                action: () => console.log('home')
                            },
                            {
                                id: '_contact',
                                title: 'Contact',
                                selected: false,
                                action: () => console.log('contact')
                            },
                            {
                                id: '_works',
                                title: 'Works',
                                selected: false,
                                action: () => console.log('works')
                            },
                        ]
                    }
                />
            </Navbar>
        </Header>
    )
}