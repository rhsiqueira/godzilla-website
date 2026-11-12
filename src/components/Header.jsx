import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { company, contact, navigation } from '../data/site';
import '../styles/header.css';

const DESKTOP_QUERY = '(min-width: 861px)';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    // Fecha o menu ao navegar.
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Enquanto o menu está aberto: Esc fecha, a página não rola
    // e o menu fecha sozinho se a tela passar para o layout desktop.
    useEffect(() => {
        if (!menuOpen) return undefined;

        const close = () => setMenuOpen(false);
        const onKeyDown = (event) => {
            if (event.key === 'Escape') close();
        };
        const desktop = window.matchMedia(DESKTOP_QUERY);

        document.addEventListener('keydown', onKeyDown);
        desktop.addEventListener('change', close);
        document.body.classList.add('no-scroll');

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            desktop.removeEventListener('change', close);
            document.body.classList.remove('no-scroll');
        };
    }, [menuOpen]);

    return (
        <>
            <div className="topbar">
                <div className="container topbar__inner">
                    <p className="topbar__tagline">{company.tagline}</p>
                    <a
                        className="topbar__cta"
                        href={contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp aria-hidden="true" />
                        Agende sua coleta: {contact.whatsappShort}
                    </a>
                </div>
            </div>

            <header className="site-header">
                <div className="container site-header__inner">
                    <Link to="/" className="brand" aria-label={`${company.name} — página inicial`}>
                        <img src="/LogoSimbolo.png" alt="" width="75" height="66" className="brand__symbol" />
                        <img src="/LogoNome.png" alt="" width="100" height="60" className="brand__name" />
                    </Link>

                    <button
                        type="button"
                        className="menu-toggle"
                        aria-expanded={menuOpen}
                        aria-controls="menu-principal"
                        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
                    </button>

                    <nav
                        id="menu-principal"
                        className="site-nav"
                        data-open={menuOpen}
                        aria-label="Navegação principal"
                    >
                        <ul className="site-nav__list">
                            {navigation.map(({ to, label, end }) => (
                                <li key={to}>
                                    <NavLink to={to} end={end} className="site-nav__link">
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <a
                            className="btn btn--primary site-nav__cta"
                            href={contact.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp aria-hidden="true" />
                            Agendar coleta
                        </a>
                    </nav>
                </div>

                <div
                    className="nav-backdrop"
                    data-open={menuOpen}
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            </header>
        </>
    );
};

export default Header;
