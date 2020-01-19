import React from 'react'

import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from 'store'

import Router from './router'

const App = () => {
    return (
        <StoreProvider>
            <Router />
        </StoreProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()