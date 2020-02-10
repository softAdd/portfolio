import React, { useState, Fragment } from 'react'

import styles from './style.module.sass'

export default ({ items }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const menuClass = isOpenMenu ? styles.menuList : styles.menuList__isClose
    
    return (
        <Fragment>
            <button className={styles.toggle} onClick={() => setIsOpenMenu(!isOpenMenu)}>&#9776;</button>
            <ul className={menuClass}>
                {items ? items.map(item => {
                    const buttonClass = item.selected ? [styles.itemButton, styles.active].join(' ') : styles.itemButton
                    return (
                        <li key={item.id} className={styles.listItem}>
                            <button className={buttonClass} onClick={item.action}>
                                {item.title}
                            </button>
                        </li>
                    )
                }) : null}
            </ul>
        </Fragment>
    )
}