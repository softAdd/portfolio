import React from 'react'

import Button from 'components/Button'

import styles from './style.module.sass'

export default () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainHeading}>
                <h1 className={styles.mainHeading__title}>Konkov Maksim</h1>
                <h2 className={styles.mainHeading__subtitle}>Web Developer</h2>
                <Button title="About Me" />
            </div>
        </main>
    )
}