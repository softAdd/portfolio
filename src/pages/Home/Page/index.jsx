import React from 'react'

import Main from '../Main'

import styles from './style.module.sass'

export default () => {
    return (
        <>
            <Main />
            <div className={styles.nightSunParent}>
                <div className={styles.nightSun}>
                    <div className={styles.nightSunCircle}></div>
                </div>
            </div>
        </>
    )
}