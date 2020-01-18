import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from 'store'

import Home from 'pages/Home/Page'

import 'styles/index.sass'

const App = () => {
    return (
        <StoreProvider>
            <div className="app-layout">
                <Home />
            </div>
        </StoreProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
