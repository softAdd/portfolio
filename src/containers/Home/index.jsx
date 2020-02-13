import React from 'react'

import styles from './style.module.sass'

import CommunicationList from 'components/CommunicationList'

export default () => {
    const icons = [
        {
            href: '#',
            iconClass: 'fa fa-github'
        },
        {
            href: '#',
            iconClass: 'fa fa-envelope'
        },
        {
            href: '#',
            iconClass: 'fa fa-telegram'
        }
    ]

    return (
        <div className={styles.home}>
            <div className={styles.background}></div>
            <div className={styles.home__content}>
                <img className={styles.imageTitle} src="/assets/title.svg" alt="page title"></img>
                <CommunicationList styles={{ zIndex: 2 }} listIcons={icons} />
            </div>
        </div>
    )
}