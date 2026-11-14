import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { disposalSteps } from '../data/site';

const Disposal = () => (
    <section className="section section--tint" aria-labelledby="descarte-titulo">
        <div className="container disposal">
            <div>
                <SectionTitle
                    id="descarte-titulo"
                    align="start"
                    eyebrow="Descarte consciente em casa"
                    title="1 litro de óleo pode contaminar até 25 mil litros de água"
                />
                <p className="disposal__source">
                    Fonte:{' '}
                    <a
                        href="https://site.sabesp.com.br/site/interna/Default.aspx?secaoId=82"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sabesp
                    </a>
                    . Se você cozinha em casa, nunca descarte o óleo na pia:
                </p>
                <ol className="disposal__steps">
                    {disposalSteps.map((step, index) => (
                        <li key={step}>
                            <span aria-hidden="true">{index + 1}</span>
                            {step}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="disposal__video reveal">
                <video src="/descarte.mp4" poster="/descarte-poster.jpg" controls preload="none" playsInline>
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </div>
    </section>
);

export default Disposal;
