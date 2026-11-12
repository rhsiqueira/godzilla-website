import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import { clients, contact } from '../data/site';
import '../styles/parceiros.css';

const Parceiros = () => (
    <>
        <PageHero eyebrow="Parceiros" title="Parcerias de longo prazo e confiança">
            <p>
                Conheça algumas empresas parceiras que estão comprometidas com a sustentabilidade e ajudando a
                reciclar milhares de litros de óleo por mês.
            </p>
        </PageHero>

        <section className="section section--flush-top" aria-label="Empresas parceiras">
            <div className="container">
                <ul className="clients">
                    {clients.map((logo, index) => (
                        <li key={logo} className="clients__item reveal">
                            <img src={logo} alt={`Logo de empresa parceira ${index + 1}`} loading="lazy" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        <section className="section section--flush-top">
            <div className="container">
                <div className="cta-band reveal">
                    <h2>Mais de 10 anos de experiência e parceria com nossos clientes!</h2>
                    <p>
                        Estamos prontos para levar o seu negócio a um novo patamar. Se você está inaugurando ou
                        enfrentando desafios na coleta de óleo, oferecemos um atendimento personalizado com
                        soluções únicas e transparentes. Junte-se aos nossos parceiros e descubra as vantagens
                        de trabalhar conosco!
                    </p>
                    <div className="cta-band__actions">
                        <a
                            className="btn btn--light"
                            href={contact.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp aria-hidden="true" />
                            Falar no WhatsApp
                        </a>
                        <Link to="/fale-conosco" className="btn btn--outline-light">
                            Outros canais
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Parceiros;
