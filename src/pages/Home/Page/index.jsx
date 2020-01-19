import React from 'react'

import Main from '../Main'

import styles from './style.module.sass'

export default ({ children }) => {
    return (
        <div className={styles.pageContent}>
            {children}
            <Main />
            <div className={styles.nightSunParent}>
                <div className={styles.nightSun}>
                    <div className={styles.nightSunCircle}></div>
                </div>
            </div>
        </div>
    )
}