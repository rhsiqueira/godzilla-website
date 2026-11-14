import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { messages, whatsappLink } from '../data/site';

// Botão que abre o WhatsApp com uma mensagem pronta (chave de `messages`).
const WhatsAppButton = ({ message = 'schedule', variant = 'primary', icon = true, className = '', children }) => (
    <a
        className={`btn btn--${variant} ${className}`}
        href={whatsappLink(messages[message])}
        target="_blank"
        rel="noopener noreferrer"
    >
        {icon && <FaWhatsapp aria-hidden="true" />}
        {children}
    </a>
);

export default WhatsAppButton;
