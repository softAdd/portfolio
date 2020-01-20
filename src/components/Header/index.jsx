import React from 'react'

import BurgerMenu from 'components/BurgerMenu'

import styles from './style.module.sass'

export default ({ menuItems, selectPage }) => (
    <header className={styles.globalHeader}>
        <BurgerMenu items={menuItems} selectPage={selectPage} />
    </header>
)