import React from 'react'

import styles from './style.module.sass'

export default ({ children }) => {
    return (
        <nav className={styles.navbar}>
            {children}
        </nav>
    )
}