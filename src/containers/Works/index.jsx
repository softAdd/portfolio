import React from 'react'

import styles from './style.module.sass'

// import works from 'data/works.json'

export default () => {
    return (
        <div className={styles.works}>
            <div className={styles.workList}>
                <div className={styles.workList__item}>
                    <div className={styles.workList__imageContainer}>
                        <img src="https://ingame.igrafond.ru/wp-content/uploads/2020/02/d218adda32efecebaac8d85543919029.jpg" alt="game" />
                    </div>
                    <div className={styles.workList__mainContent}>
                        <div className={styles.workList__textContent}>
                            <h2 className={styles.workList__title}>Urban Forest</h2>
                            <p className={styles.workList__description}>JS + Canvas HTML5 game.</p>
                            <ul className={styles.workList__techList}>
                                <li>JavaScript</li>
                                <li>Canvas</li>
                            </ul>
                        </div>
                        <ul className={styles.workList__links}>
                            <li>
                                <a href="">code</a>
                            </li>
                            <li>/</li>
                            <li>
                                <a href="">project</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}