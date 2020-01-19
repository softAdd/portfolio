import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useStore } from 'store'
import { observer } from 'mobx-react-lite'

import PrimaryPageButton from 'components/PrimaryPageButton'
import SmallIcon from 'components/SmallIcon'

import styles from './style.module.sass'

export default observer(
    () => {
        const history = useHistory()
        const { headerStore, appLayoutStore } = useStore()
        useEffect(() => {
            appLayoutStore.selectDarkTheme()

            return () => {
                appLayoutStore.selectLightTheme()
            }
        }, [appLayoutStore])

        const redirectToContactPage = () => {
            headerStore.selectPage('contact')
            history.push(headerStore.selectedItem.route)
        }

        return (
            <main className={styles.mainHome}>
                <div className={styles.mainHeadingWrapper}>
                    <div className={styles.mainHeadingWrapper__titles}>
                        <h1 className={styles.mainTitle}>
                            Konkov Maksim
                        </h1>
                        <h2 className={styles.mainSubtitle}>
                            Web Developer
                        </h2>
                        <PrimaryPageButton title="About Me" onClick={redirectToContactPage} />
                    </div>
                    <div className={styles.mainIcons}>
                        <SmallIcon src="assets/icons/mail.svg" alt="email" href="mailto: soft.snake867@gmail.com" />
                        <SmallIcon src="assets/icons/tel.svg" alt="telegram" href="https://t-do.ru/username" />
                        <SmallIcon src="assets/icons/git.svg" alt="github" href="https://github.com/softAdd" />
                        <SmallIcon src="assets/icons/lin.svg" alt="linkedIn" href="#" />
                    </div>
                </div>
            </main>
        )
    }
)
