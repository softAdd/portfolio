import React from 'react'
import { NavLink } from 'react-router-dom'

import { footerItems } from 'data/navigation.json'

import styles from './style.module.sass'

export default () => (
    <footer className={styles.footer}>
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {footerItems && footerItems.map(({ id, href, iconClass }) => (
                    <NavLink exact key={id} to={href}>
                        <i className={`${iconClass} ${styles.nav__icon}`}></i>
                    </NavLink>
                ))}
            </ul>
        </nav>
    </footer>
)