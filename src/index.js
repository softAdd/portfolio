import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import Home from 'pages/Home/Page'

import 'styles/index.sass'

const App = () => {
    return (
        <div className="app-layout">
            <Home />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
