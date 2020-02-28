import React from 'react'

import styles from './style.module.sass'

export default ({ title, onClick }) => (
    <button
        className={styles.cButton}
        onClick={onClick}
    >
        {title}
    </button>
)