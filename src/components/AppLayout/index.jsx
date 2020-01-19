import React from 'react'

import styles from './style.module.sass'

export default ({ children, theme }) => {
    const layoutClassName = (theme === 'light' ? styles.appLayout__light : styles.appLayout__dark)
    return (
        <div className={layoutClassName}>
            {children}
        </div>
    )
}