import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { messages, whatsappLink } from '../data/site';

// Botão flutuante de WhatsApp, visível apenas no celular.
const WhatsAppFab = () => (
    <a
        className="whatsapp-fab"
        href={whatsappLink(messages.schedule)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar coleta pelo WhatsApp"
    >
        <FaWhatsapp aria-hidden="true" />
    </a>
);

export default WhatsAppFab;
