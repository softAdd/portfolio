import React from 'react'

import Header from 'components/Header'
import Main from '../Main'

import styles from './style.module.sass'

export default () => (
    <div className={styles.page}>
        <div className={styles.pageContent}>
            <Header />
            <Main />
        </div>
    </div>
)