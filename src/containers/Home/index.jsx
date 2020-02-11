import React from 'react'

import styles from './style.module.sass'

export default () => {
    return (
        <div className={styles.home}>
            <div className={styles.background}></div>
            <div className={styles.home__content}>
                <img className={styles.imageTitle} src="/assets/title.svg" alt="page title"></img>
                <div className={styles.icons}>
                    <a className={styles.comIcon} href="/">
                        <img src="/assets/icons/git.svg" alt=""></img>
                    </a>
                    <a className={styles.comIcon} href="/">
                        <img src="/assets/icons/mail.svg" alt=""></img>
                    </a>
                    <a className={styles.comIcon} href="/">
                        <img src="/assets/icons/tel.svg" alt=""></img>
                    </a>
                </div>
            </div>
        </div>
    )
}