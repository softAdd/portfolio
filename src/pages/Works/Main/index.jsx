import React from 'react'
import { observer } from 'mobx-react-lite'

import CardList from '../CardList'

import styles from './style.module.sass'

export default observer(
    () => {
        return (
            <main className={styles.mainWorks}>
                <CardList />
            </main>
        )
    }
)
