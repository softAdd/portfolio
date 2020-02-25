import React from 'react'

import styles from './style.module.sass'

export default () => {
    return (
        <div className={styles.works}>
            <div className={styles.workList}>
                <div className={styles.workList__item}>
                    <div className={styles.workList__imageContainer}>
                        <img src="https://ingame.igrafond.ru/wp-content/uploads/2020/02/d218adda32efecebaac8d85543919029.jpg" alt="game" className="workList__image" />
                    </div>
                    <div className="workList__mainContent">
                        <div className="workList__textContent">
                            <h2 className="workList__title">Urban Forest</h2>
                            <p className="workList__description">JS + Canvas HTML5 game.</p>
                            <ul className="workList__techList">
                                <li className="workList__tech">JavaScript</li>
                                <li className="workList__tech">Canvas</li>
                            </ul>
                        </div>
                        <ul className="workList__links">
                            <li className="workList__linksItem">
                                <a href="" className="workList__link">View Project</a>
                            </li>
                            <li className="workList__linksItem">
                                <a href="" className="workList__link">View Code</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}