import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './style.module.sass'


export default ({ items }) => {
    const history = useHistory()
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menuList}>
                {items ? items.map(item => (
                    <li key={item.id} className={styles.listItem}>
                        <button className={styles.itemButton} onClick={() => history.push(item.route)}>
                            {item.title}
                        </button>
                    </li>
                )) : null}
            </ul>
        </nav>
    )
}