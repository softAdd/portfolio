import React from 'react'

import Header from 'components/Header'

import styles from './style.module.sass'
import { observer } from 'mobx-react'
import { useStore } from 'store'

export default observer(
    ({ children }) => {
        const { headerStore } = useStore()
        const { items } = headerStore
        return (
            <div className={styles.pageContent}>
                <Header menuItems={items} onItemClick={headerStore.selectPage} />
                {children}
            </div>
        )
    }
)