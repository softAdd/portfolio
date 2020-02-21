import React, { useEffect } from 'react'

import styles from './style.module.sass'

import resume from 'data/resume.json'

export default () => {
    useEffect(() => console.log(resume))
    return (
        <div className={styles.resume}>
            <div className={styles.resume__sheet}>
                <h2 className="resume__title">{resume.title}</h2>
                <h4 className="resume__subtitle">Контакты и ссылки</h4>
                <ul className="resume__links">
                    <li><a href={resume.email} target="_blank" rel="noopener noreferrer">email</a></li>
                    <li><a href={resume.github} target="_blank" rel="noopener noreferrer">github</a></li>
                    <li><a href={resume.telegram} target="_blank" rel="noopener noreferrer">telegram</a></li>
                </ul>
                <h4 className="resume__subtitle">Обо мне</h4>
                <p className="resume__about">{resume.aboutMe}</p>
                <h4 className="resume__subtitle">Навыки</h4>
                <ul>
                    {resume.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <p className="resume__byscript">Предпочитаемый вид связи: telegram (<a href={resume.telegram} target="_blank" rel="noopener noreferrer">@softi3</a>).</p>
            </div>
        </div>
    )
}