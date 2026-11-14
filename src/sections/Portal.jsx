import React from 'react';
import { FaCheck, FaDownload } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import WhatsAppButton from '../components/WhatsAppButton';
import { credit, portalFeatures, portalPreview } from '../data/site';

const { months, certificates } = portalPreview;
const maxLiters = Math.max(...months.map((month) => month.liters));
const totalLiters = months.reduce((sum, month) => sum + month.liters, 0);

// Prévia do painel do cliente, com dados de exemplo.
const PortalMockup = () => (
    <figure className="portal-mock reveal">
        <div className="portal-mock__window" aria-hidden="true">
            <div className="portal-mock__bar">
                <span />
                <span />
                <span />
                <p>portal.godzilla — Seu comércio</p>
            </div>

            <div className="portal-mock__kpis">
                <div>
                    <span>Litros coletados</span>
                    <strong>{totalLiters} L</strong>
                </div>
                <div>
                    <span>Crédito gerado</span>
                    <strong className="gold">R$ {(totalLiters * credit.perLiter).toLocaleString('pt-BR')}</strong>
                </div>
                <div>
                    <span>Certificados</span>
                    <strong>{months.length}</strong>
                </div>
            </div>

            <div className="portal-mock__chart">
                <p>Litros por mês</p>
                <div className="bars">
                    {months.map(({ label, liters }) => (
                        <div key={label} className="bars__item">
                            <span className="bars__bar" style={{ '--size': `${(liters / maxLiters) * 100}%` }} />
                            <span className="bars__label">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <ul className="portal-mock__certs">
                {certificates.map(({ number, date, liters }) => (
                    <li key={number}>
                        <span>
                            <strong>{number}</strong>
                            {date} · {liters} L
                        </span>
                        <span className="badge">
                            <FaDownload />
                            Disponível
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <figcaption>Prévia ilustrativa, com dados de exemplo</figcaption>
    </figure>
);

const Portal = () => (
    <section id="portal" className="section dark portal" aria-labelledby="portal-titulo">
        <div className="container portal__grid">
            <div className="portal__content">
                <span className="soon-badge">Em breve</span>
                <SectionTitle
                    id="portal-titulo"
                    align="start"
                    eyebrow="Portal do Cliente Godzilla"
                    title="Suas coletas, certificados e ganhos num só lugar."
                    lead="Estamos construindo uma área exclusiva para o seu comércio acompanhar tudo sem precisar pedir por mensagem."
                />
                <ul className="check-list">
                    {portalFeatures.map((feature) => (
                        <li key={feature}>
                            <FaCheck aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <WhatsAppButton message="portal" variant="accent">
                    Quero acesso antecipado
                </WhatsAppButton>
            </div>

            <PortalMockup />
        </div>
    </section>
);

export default Portal;
