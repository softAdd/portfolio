import React, { Fragment } from 'react'

import { observer } from 'mobx-react'
import { useStore } from 'store'

import AppLayout from 'components/AppLayout'
import Dashboard from 'components/Dashboard'
import Home from 'pages/Home/Page'

import 'styles/index.sass'

const Router = observer(
    () => {
        const { headerStore } = useStore()
        const { items } = headerStore
        const selectedPage = items.find(item => item.selected === true).id

        const renderHome = () => (
            <AppLayout>
                <Dashboard>
                    <Home />
                </Dashboard>
            </AppLayout>
        )

        const renderWorks = () => (
            <AppLayout>
                <Dashboard></Dashboard>
            </AppLayout>
        )

        const renderContact = () => (
            <AppLayout>
                <Dashboard></Dashboard>
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