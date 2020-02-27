import React, { useState } from 'react'

import styles from './style.module.sass'

import resumeObject from 'data/resume.json'

export default () => {
    const [locale, setLocale] = useState('en')
    const resume = resumeObject[locale]

    return (
        <div className={styles.resume}>
            <div className={styles.resume__sheet}>
                <h2 className={styles.resume__title}>{resume.title}</h2>
                <div className={styles.resume__locale}>
                    <button className={styles.resume__localeEn} onClick={() => setLocale('en')}>English</button>
                    <span>-</span>
                    <button className={styles.resume__localeRu} onClick={() => setLocale('ru')}>Russian</button>
                </div>
                <h4 className={styles.resume__subtitle}>{locale === 'ru' ? 'Контакты и ссылки' : 'Contacts and links'}</h4>
                <ul className={styles.resume__links}>
                    <li><a href={resume.email} target="_blank" rel="noopener noreferrer">email</a></li>
                    <li><a href={resume.github} target="_blank" rel="noopener noreferrer">github</a></li>
                    <li><a href={resume.telegram} target="_blank" rel="noopener noreferrer">telegram</a></li>
                </ul>
                <h4 className={styles.resume__subtitle}>{locale === 'ru' ? 'Обо мне' : 'About me'}</h4>
                <p className="resume__about">{resume.aboutMe}</p>
                <h4 className={styles.resume__subtitle}>{locale === 'ru' ? 'Ключевые навыки' : 'Main skills'}</h4>
                <ul>
                    {resume.skills && resume.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <hr className={styles.resume__footerLine} />
                <p className="resume__byscript">
                    {locale === 'ru' ? 'Предпочитаемый вид связи: telegram ' : 'Preferred type of communication: telegram ' }
                    (<a href={resume.telegram} target="_blank" rel="noopener noreferrer">@softi3</a>).
                </p>
            </div>
        </div>
    )
}