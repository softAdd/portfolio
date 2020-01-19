import React from 'react'

import styles from './style.module.sass'


export default ({ items, onItemClick }) => (
    <nav>
        <ul className={styles.menuList}>
            {items ? items.map(item => (
                <li key={item.id} className={styles.listItem}>
                    <button className={styles.itemButton} onClick={() => onItemClick(item.id)}>{item.title}</button>
                </li>
            )) : null}
        </ul>
    </nav>
)