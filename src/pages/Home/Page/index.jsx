import React from 'react'

import Header from 'components/Header'
import Main from '../Main'

import styles from './style.module.sass'

export default () => (
    <div className={styles.page}>
        <div className={styles.pageContent}>
            <Header />
            <Main />
            <div className={styles.nightSunParent}>
                <div className={styles.nightSun}>
                    <div className={styles.nightSunCircle}></div>
                </div>
            </div>
        </div>
    </div>
)