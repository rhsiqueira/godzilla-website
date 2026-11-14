import React from 'react';
import SectionTitle from '../components/SectionTitle';
import WhatsAppButton from '../components/WhatsAppButton';
import { howItWorks } from '../data/site';

const HowItWorks = () => (
    <section id="como-funciona" className="section" aria-labelledby="como-funciona-titulo">
        <div className="container">
            <SectionTitle
                id="como-funciona-titulo"
                eyebrow="Como funciona"
                title="Como funciona a coleta de óleo usado"
                lead="Do pedido ao pagamento em 4 passos. Você não precisa levar o óleo a lugar nenhum: a Godzilla busca no seu comércio."
            />

            <div className="how">
                <ol className="how__steps">
                    {howItWorks.map(({ title, text }, index) => (
                        <li key={title} className="how__step reveal">
                            <span className="how__number" aria-hidden="true">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <figure className="how__video reveal">
                    <video
                        src="/god-coleta.mp4"
                        poster="/god-coleta-poster.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-label="Vídeo da equipe Godzilla realizando uma coleta de óleo"
                    />
                    <figcaption>Equipe Godzilla em uma coleta</figcaption>
                </figure>
            </div>

            <div className="section__action">
                <WhatsAppButton>Agendar minha primeira coleta</WhatsAppButton>
            </div>
        </div>
    </section>
);

export default HowItWorks;
