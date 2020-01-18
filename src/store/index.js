import React from 'react'

import headerStore from './Header'

const storeContext = React.createContext(null)

const store = {
    headerStore
}

export const StoreProvider = props => {
    return (
        <storeContext.Provider value={store}>
            {props.children}
        </storeContext.Provider>
    )
}

export const useStore = () => {
    const store = React.useContext(storeContext)
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
}