import React from 'react';

const ValueCard = ({ title, text, image }) => (
    <article className="value-card reveal">
        <div className="value-card__icon">
            <img src={image} alt="" loading="lazy" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
    </article>
);

export default ValueCard;
