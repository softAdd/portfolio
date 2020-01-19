import React from 'react'

import styles from './style.module.sass'

export default ({ children }) => (
    <div className={styles.page}>
        {children}
    </div>
)