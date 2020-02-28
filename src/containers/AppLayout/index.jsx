import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import styles from './style.module.sass'

import AppHeader from 'containers/AppHeader'
import AppMainRoutes from 'containers/AppMainRoutes'
import AppFooter from 'containers/AppFooter'

export default () => {
    return (
        <div className={styles.appLayout}>
            <Router>
                <AppHeader />
                <AppMainRoutes />
                <AppFooter />
            </Router>
        </div>
    )
}