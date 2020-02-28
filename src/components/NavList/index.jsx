import React, { useState, Fragment } from 'react'

import { NavLink } from 'react-router-dom'

import styles from './style.module.sass'

export default ({ items }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const menuClass = isOpenMenu ? styles.menuList : styles.menuList__isClose
    
    return (
        <Fragment>
            <button className={styles.toggle} onClick={() => setIsOpenMenu(!isOpenMenu)}>&#9776;</button>
            <ul className={menuClass}>
                {items ? items.map(item => {
                    return (
                        <li key={item.id} className={styles.listItem}>
                            <NavLink exact to={item.href} className={styles.itemLink} activeClassName={styles.activeLink}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                }) : null}
            </ul>
        </Fragment>
    )
}