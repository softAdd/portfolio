import React from 'react'

import styles from './style.module.sass'

export default ({ title, action }) => (
    <button
        className={styles.button}
        onClick={action}
    >
        {title}
    </button>
)