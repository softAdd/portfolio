import React from 'react'

import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from 'store'

import AppLayout from 'containers/AppLayout'

import 'styles/index.sass'

const App = () => {
    return (
        <StoreProvider>
            <AppLayout />
        </StoreProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()