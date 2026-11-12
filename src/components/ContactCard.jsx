import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Cartão de contato: o cartão inteiro é um link para o canal.
const ContactCard = ({ icon: Icon, title, value, action, href, external = false }) => (
    <a
        className="contact-card reveal"
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
        <span className="contact-card__icon">
            <Icon aria-hidden="true" />
        </span>
        <span className="contact-card__title">{title}</span>
        <span className="contact-card__value">{value}</span>
        <span className="contact-card__action">
            {action}
            <FaArrowRight aria-hidden="true" />
        </span>
    </a>
);

export default ContactCard;
