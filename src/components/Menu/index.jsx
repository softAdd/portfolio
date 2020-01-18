import React from 'react'

import { observer } from 'mobx-react'
import { useStore } from 'store'

import styles from './style.module.sass'


export default observer(() => {
    const { headerStore } = useStore()
    const { items } = headerStore
    return (
        <nav>
            <ul className={styles.menuList}>
                {items ? items.map(item => (
                    <li key={item.id} className={styles.listItem}>
                        <button className={styles.itemButton}>{item.title}</button>
                    </li>
                )) : null}
            </ul>
        </nav>
    )
})