import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TeamCard = ({ name, image }) => (
    <figure className="team-card reveal">
        <div className="team-card__photo">
            <img src={image} alt={`Foto de ${name}`} width="200" height="267" loading="lazy" />
        </div>
        <figcaption>
            <span className="team-card__name">{name}</span>
            <span className="team-card__badge">
                <FaCheckCircle aria-hidden="true" />
                Coletor autorizado
            </span>
        </figcaption>
    </figure>
);

export default TeamCard;
