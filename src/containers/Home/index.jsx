import React from 'react'

import styles from './style.module.sass'

import CommunicationList from 'components/CommunicationList'

export default () => {
    const icons = [
        {
            id: 'git',
            href: 'https://github.com/softAdd',
            iconClass: 'fa fa-github'
        },
        {
            id: 'mail',
            href: 'mailto: soft.snake867@gmail.com',
            iconClass: 'fa fa-envelope'
        },
        {
            id: 'telegram',
            href: 'https://teleg.run/softi3',
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