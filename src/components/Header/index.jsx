import React from 'react'

import Menu from 'components/Menu'

import styles from './style.module.sass'

export default ({ menuItems }) => (
    <header className={styles.globalHeader}>
        <Menu items={menuItems} />
    </header>
)