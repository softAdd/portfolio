import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './style.module.sass'


const ToggleButton = ({ toggleMenu }) => {
    return (
        <button className={styles.toggle} onClick={toggleMenu}>&#9776;</button>
    )
}

const MenuList = ({ isOpenMenu, items, selectPage }) => {
    const history = useHistory()
    const menuClass = isOpenMenu ? styles.menuList : styles.menuList__isClose
    const selectPageWithItem = item => {
        selectPage(item.id)
        history.push(item.route)
    }

    return (
        <ul className={menuClass}>
            {items ? items.map(item => {
                const buttonClass = item.selected ? [styles.itemButton, styles.active].join(' ') : styles.itemButton
                return (
                    <li key={item.id} className={styles.listItem}>
                        <button className={buttonClass} onClick={selectPageWithItem.bind(this, item)}>
                            {item.title}
                        </button>
                    </li>
                )
            }) : null}
        </ul>
    )
}

export default ({ items, selectPage }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <nav className={styles.navbar}>
            <MenuList isOpenMenu={isOpenMenu} items={items} selectPage={selectPage} />
            <ToggleButton toggleMenu={() => setIsOpenMenu(!isOpenMenu)} />
        </nav>
    )
}