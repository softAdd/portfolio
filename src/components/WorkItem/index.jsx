import React from 'react'

import styles from './style.module.sass'

export default ({ title, description, tags, screen, code, site }) => (
    <div className={`${styles.workList__item}`}>
        {screen &&
            <div className={styles.workList__imageContainer}>
                <img src={screen} alt={title} />
            </div>
        }
        <div className={styles.workList__mainContent}>
            <div className={styles.workList__textContent}>
                {title && <h2 className={styles.workList__title}>{title}</h2>}
                {description && <p className={styles.workList__description}>{description}</p>}
                {tags &&
                    <ul className={styles.workList__techList}>
                        {tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                }
            </div>
            <ul className={styles.workList__links}>
                {code &&
                    <li>
                        <a href={code}>code</a>
                    </li>
                }
                {(code && site) && <li>/</li>}
                {site &&
                    <li>
                        <a href={site}>project</a>
                    </li>
                }
            </ul>
        </div>
    </div>
)