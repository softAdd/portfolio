import React from 'react'

import styles from './style.module.sass'

import LinkButton from 'components/LinkButton'

export default ({ title, subtitle, image, code, site }) => (
    <div className={styles.workItem}>
        <div className={styles.workItem__content}>
            <div className={styles.workItem__image} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={styles.workItem__description}>
                <h2 className={styles.workItem__title}>{title}</h2>
                <p className={styles.workItem__subtitle}>{subtitle}</p>
            </div>
        </div>
        <div className={styles.workItem__links}>
            {site &&
                <div className={styles.buttonContainer}>
                    <LinkButton title="View Project" href={site} />
                </div>
            }
            {code &&
                <div className={styles.buttonContainer}>
                    <LinkButton title="View Code" href={code} />
                </div>
            }
        </div>
    </div>
)