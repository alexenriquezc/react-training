import React from 'react'

export const GifGridItem = ({ title, url }) => {
    const rand = Math.random();
    return (
        <div className="card animate__animated animate__fadein" key={rand}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
