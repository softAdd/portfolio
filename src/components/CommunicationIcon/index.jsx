import React from 'react'

export default ({ icon }) => (
    <a href={icon.href || '#'} target="_blank" rel="noopener noreferrer">
        <i className={icon.iconClass}></i>
    </a>
)