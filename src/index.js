import React from 'react'

import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import 'wowjs'

import AppLayout from 'containers/AppLayout'

import 'styles/index.sass'

ReactDOM.render(<AppLayout />, document.getElementById('root'))
serviceWorker.unregister()