import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const { pathname, hash } = useLocation();

    // Ao trocar de página, volta ao topo (ou vai até a âncora, se houver).
    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.slice(1));
            if (target) {
                target.scrollIntoView();
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return (
        <>
            <a className="skip-link" href="#conteudo">
                Pular para o conteúdo
            </a>
            <Header />
            <main id="conteudo" key={pathname} className="page">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
