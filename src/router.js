import React, { Fragment } from 'react'

import { observer } from 'mobx-react'
import { useStore } from 'store'

import AppLayout from 'components/AppLayout'
import Header from 'components/Header'
import Home from 'pages/Home/Page'

import 'styles/index.sass'

const Router = observer(
    () => {
        const { headerStore } = useStore()
        const { items } = headerStore
        const selectedPage = items.find(item => item.selected === true).id

        const renderHome = () => (
            <AppLayout>
                <Home>
                    <Header menuItems={items} onItemClick={headerStore.selectPage} />
                </Home>
            </AppLayout>
        )

        const renderWorks = () => (
            <AppLayout>
                <Header menuItems={items} onItemClick={headerStore.selectPage} />
            </AppLayout>
        )

        const renderContact = () => (
            <AppLayout>
                <Header menuItems={items} onItemClick={headerStore.selectPage} />
            </AppLayout>
        )

        return (
            <Fragment>
                {selectedPage === 'home' ? renderHome() : null}
                {selectedPage === 'works' ? renderWorks() : null}
                {selectedPage === 'contact' ? renderContact() : null}
            </Fragment>
        )
    }
)

export default Router