import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { useStore } from 'store'
import { observer } from 'mobx-react'

import AppLayout from 'components/AppLayout'
import Header from 'components/Header'

import HomeMain from 'pages/Home/Main'
import WorksMain from 'pages/Works/Main'
import ContactsMain from 'pages/Contacts/Main'

export default observer(
    () => {
        const { headerStore, appLayoutStore } = useStore()

        return (
            <AppLayout theme={appLayoutStore.theme}>
                <Router>
                    <Header menuItems={headerStore.items} />

                    <Switch>
                        <Route exact path="/" component={HomeMain} />
                        <Route path="/works" component={WorksMain} />
                        <Route path="/contact" component={ContactsMain} />
                    </Switch>
                </Router>
            </AppLayout>
        )
    }
)