import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { company, navigation } from '../data/site';
import WhatsAppButton from './WhatsAppButton';
import '../styles/header.css';

const DESKTOP_QUERY = '(min-width: 961px)';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
        <header className="site-header">
            <div className="container site-header__inner">
                <a href="#topo" className="brand" aria-label={`${company.name} — início`}>
                    <img src="/LogoSimbolo.png" alt="" width="75" height="66" className="brand__symbol" />
                    <img src="/LogoNome.png" alt="" width="100" height="60" className="brand__name" />
                </a>

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
                        {navigation.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href} className="site-nav__link" onClick={() => setMenuOpen(false)}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <WhatsAppButton className="site-nav__cta">Agendar coleta</WhatsAppButton>
                </nav>
            </div>

            <div
                className="nav-backdrop"
                data-open={menuOpen}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />
        </header>
    );
};

export default Header;
