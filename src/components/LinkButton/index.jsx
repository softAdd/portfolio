import React from 'react'

import styles from './style.module.sass'

export default ({ title, href }) => (
    <a className={styles.button} href={href} target="_blank" rel="noopener noreferrer">
        {title}
    </a>
)