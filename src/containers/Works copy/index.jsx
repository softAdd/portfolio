import React from 'react'

import styles from './style.module.sass'

import works from 'data/works.json'

import WorkItem from 'components/WorkItem'

export default () => {
    return (
        <div className={styles.works}>
            <div className={styles.workList}>
                {works && works.map((work, id) => (
                    <WorkItem key={`${work.title}-${id}`} {...work} />
                ))}
            </div>
        </div>
    )
}