import React, { useEffect } from 'react'
import { useStore } from 'store'
import { observer } from 'mobx-react-lite'

export default observer(
    () => {
        const { appLayoutStore } = useStore()
        useEffect(() => {
            appLayoutStore.selectDarkTheme()

            return () => {
                appLayoutStore.selectLightTheme()
            }
        }, [appLayoutStore])

        return (
            <main className="home"></main>
        )
    }
)
