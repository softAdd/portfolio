import React from 'react'

import styles from './style.module.sass'

export default ({ src, alt, href }) => (
    <a href={href || '#'} target="_blank" rel="noopener noreferrer">
        <img
            className={styles.icon}
            src={src}
            alt={alt}
        />
    </a>
)