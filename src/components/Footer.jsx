import React from 'react';
import { FaInstagram, FaPhoneAlt, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';
import { company, contact, messages, navigation, whatsappLink } from '../data/site';
import '../styles/footer.css';

const Footer = () => (
    <footer className="site-footer">
        <div className="container site-footer__grid">
            <div className="site-footer__brand">
                <img src="/LogoNome.png" alt={company.name} width="100" height="60" />
                <p>Coleta e reciclagem de óleo de cozinha usado para restaurantes, lanchonetes, padarias e hotéis.</p>
                <p>{company.coverage}.</p>
            </div>

            <nav aria-label="Seções da página">
                <h2 className="site-footer__title">Navegação</h2>
                <ul className="site-footer__list">
                    {navigation.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} className="site-footer__link">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div>
                <h2 className="site-footer__title">Canais oficiais</h2>
                <ul className="site-footer__list">
                    <li>
                        <a
                            className="site-footer__link"
                            href={whatsappLink(messages.schedule)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp aria-hidden="true" />
                            {contact.whatsappLabel}
                        </a>
                    </li>
                    <li>
                        <a className="site-footer__link" href={contact.phoneUrl}>
                            <FaPhoneAlt aria-hidden="true" />
                            {contact.phoneLabel}
                        </a>
                    </li>
                    <li>
                        <a className="site-footer__link" href={contact.emailUrl}>
                            <FaRegEnvelope aria-hidden="true" />
                            {contact.email}
                        </a>
                    </li>
                    <li>
                        <a
                            className="site-footer__link"
                            href={contact.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram aria-hidden="true" />
                            {contact.instagramLabel}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="container site-footer__bottom">
            <p>
                © {new Date().getFullYear()} {company.name} — Todos os direitos reservados.
            </p>
            <p>
                Desenvolvimento:{' '}
                <a href="https://github.com/Rodincrivel" target="_blank" rel="noopener noreferrer">
                    Rodrigo Holanda
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
