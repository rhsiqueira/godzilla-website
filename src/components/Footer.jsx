import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { company, contact, navigation } from '../data/site';
import '../styles/footer.css';

const Footer = () => (
    <footer className="site-footer">
        <div className="container site-footer__grid">
            <div className="site-footer__brand">
                <img src="/LogoNome.png" alt={company.name} width="100" height="60" />
                <p>{company.tagline}</p>
            </div>

            <div>
                <h2 className="site-footer__title">Redes sociais</h2>
                <p>Siga-nos nas redes sociais!</p>
                <a
                    className="site-footer__link"
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram aria-hidden="true" />
                    {contact.instagramLabel}
                </a>
            </div>

            <nav aria-label="Mapa do site">
                <h2 className="site-footer__title">Mapa do site</h2>
                <ul className="site-footer__list">
                    {navigation.map(({ to, label }) => (
                        <li key={to}>
                            <Link to={to} className="site-footer__link">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div>
                <h2 className="site-footer__title">Atendimento</h2>
                <ul className="site-footer__list">
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
