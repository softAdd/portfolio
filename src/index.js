import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import styles from 'styles/app.module.sass'

const App = () => (
    <div className={styles.test}>1</div>
)

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
