import React from 'react'

import styles from './style.module.sass'

import {
    Switch,
    Route
} from 'react-router-dom'

import Home from 'containers/Home'
import Resume from 'containers/Resume'
import Works from 'containers/Works'

export default () => {
    return (
        <main className={styles.main}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/works" component={Works} />
            </Switch>
        </main>
    )
}