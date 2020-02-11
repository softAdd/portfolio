import React from 'react'

import styles from './style.module.sass'

export default () => {
    return (
        <div className={styles.home}>
            <div className={styles.background}></div>
            <h2 className={styles.title}>MAKSIM KONKOV</h2>
            <h3 className={styles.subtitle}>WEB-DEVELOPER</h3>
        </div>
    )
}