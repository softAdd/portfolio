import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import styles from 'styles/app.module.sass'
import { observable, computed } from 'mobx'
import { Provider } from 'mobx-react'

class App extends Component {
    @observable price = 3
    @observable amount = 5

    @computed get total() {
        return this.price * this.amount
    }

    render() {
        return (
            <Provider>
                <div className={styles.test}>{this.total}</div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
