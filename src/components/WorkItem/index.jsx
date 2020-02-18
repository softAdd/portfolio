import React from 'react'

import styles from './style.module.sass'

export default ({ title, subtitle, image, code, site }) => (
    <div className={styles.workItem}>
        <div className={styles.workItem__imageContainer}>
            <img src={image} alt={`${title}: screenshot`} className={styles.workItem__image} />
        </div>
        <div className="workItem__description">
            <div className="workItem__title"></div>
            <div className="workItem__subtitle"></div>
        </div>
    </div>
)