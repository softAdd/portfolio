import React from 'react'

import styles from './style.module.sass'

import CommunicationList from 'components/CommunicationList'

export default () => {
    const icons = [
        {
            id: 'git',
            href: '#',
            iconClass: 'fa fa-github'
        },
        {
            id: 'mail',
            href: '#',
            iconClass: 'fa fa-envelope'
        },
        {
            id: 'telegram',
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