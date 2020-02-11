import React from 'react'

import styles from './style.module.sass'

import Home from 'containers/Home'

export default () => {
    return (
        <main className={styles.main}>
            <Home />
        </main>
    )
}