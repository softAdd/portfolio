import React from 'react'

import WorkItem from 'components/WorkItem'

import styles from './style.module.sass'

import works from 'data/works.json'

export default () => {
    return (
        <div className={styles.works}>
            <div className={styles.workList}>
                {works && works.map(work => <WorkItem {...work} />)}
            </div>
        </div>
    )
}