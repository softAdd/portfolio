import React from 'react'

import styles from './style.module.sass'

import AppHeader from 'containers/AppHeader'
import AppMain from 'containers/AppMain'

export default () => {
    return (
        <div className={styles.appLayout__light}>
            <AppHeader />
            <AppMain />
        </div>
    )
}