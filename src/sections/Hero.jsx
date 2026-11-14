import React from 'react';
import { FaArrowDown, FaCheck } from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';
import { audiences, trackingSteps } from '../data/site';

// Quantas etapas do rastreio ilustrativo aparecem como concluídas.
const DONE_STEPS = 3;

const Hero = () => (
    <section id="topo" className="hero dark">
        <div className="container hero__grid">
            <div className="hero__content">
                <ul className="tags" aria-label="Para quem é">
                    {audiences.map((audience) => (
                        <li key={audience}>{audience}</li>
                    ))}
                </ul>

                <h1 className="hero__title">
                    Seu óleo de cozinha usado <em>vale dinheiro.</em>
                </h1>
                <p className="hero__lead">
                    Coleta de óleo de cozinha usado em São Paulo: buscamos em até 48h, fornecemos os recipientes e pagamos{' '}
                    <strong>R$ 4 por litro em crédito</strong>. Com certificado de destinação em toda coleta.
                </p>

                <div className="hero__actions">
                    <WhatsAppButton variant="accent">Agendar coleta grátis</WhatsAppButton>
                    <a className="btn btn--outline" href="#como-funciona">
                        Ver como funciona
                        <FaArrowDown aria-hidden="true" />
                    </a>
                </div>
            </div>

            <div className="hero__media">
                <img
                    className="hero__photo"
                    src="/foto-luis.jpg"
                    alt="Coletor da Godzilla, uniformizado, preenchendo o registro de uma coleta dentro do veículo da empresa"
                    width="739"
                    height="914"
                />

                <aside className="tracking" aria-label="Exemplo de acompanhamento de uma coleta">
                    <p className="tracking__title">
                        <span className="pulse" aria-hidden="true" />
                        Rastreio da coleta
                    </p>
                    <ol className="tracking__list">
                        {trackingSteps.map((step, index) => (
                            <li key={step} data-done={index < DONE_STEPS} data-current={index === DONE_STEPS}>
                                <span className="tracking__dot" aria-hidden="true">
                                    {index < DONE_STEPS && <FaCheck />}
                                </span>
                                {step}
                            </li>
                        ))}
                    </ol>
                    <p className="tracking__note">Exemplo ilustrativo</p>
                </aside>
            </div>
        </div>
    </section>
);

export default Hero;
