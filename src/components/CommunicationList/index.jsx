import React from 'react'

import styles from './style.module.sass'

import CommunicationIcon from 'components/CommunicationIcon'

export default ({ listIcons }) => (
    <ul className={styles.comList}>
        {listIcons && listIcons.map(icon => (
            <li key={icon.id}>
                <CommunicationIcon icon={icon} />
            </li>
        ))}
    </ul>
)