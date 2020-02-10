import React from 'react'

import styles from './style.module.sass'

export default ({ children }) => (
    <header className={styles.globalHeader}>
        {children}
    </header>
)