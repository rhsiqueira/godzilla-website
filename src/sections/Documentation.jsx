import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { oilJourney } from '../data/site';

// Certificado de exemplo, desenhado em HTML (sem dados reais).
const CertificateMockup = () => (
    <figure className="certificate reveal">
        <div className="certificate__paper" aria-hidden="true">
            <div className="certificate__header">
                <img src="/LogoSimbolo.png" alt="" width="75" height="66" />
                <div>
                    <strong>Certificado de destinação</strong>
                    <span>Nº GZ-2026-000123</span>
                </div>
            </div>
            <dl>
                <div>
                    <dt>Gerador</dt>
                    <dd>Seu comércio</dd>
                </div>
                <div>
                    <dt>Resíduo</dt>
                    <dd>Óleo vegetal usado</dd>
                </div>
                <div>
                    <dt>Volume coletado</dt>
                    <dd>150 litros</dd>
                </div>
                <div>
                    <dt>Destinadora final</dt>
                    <dd>Retióleo</dd>
                </div>
            </dl>
            <p className="certificate__status">
                <FaCheckCircle />
                Destinação ambientalmente adequada
            </p>
        </div>
        <figcaption>Modelo ilustrativo do certificado emitido a cada coleta</figcaption>
    </figure>
);

const Documentation = () => (
    <section id="documentacao" className="section" aria-labelledby="documentacao-titulo">
        <div className="container">
            <SectionTitle
                id="documentacao-titulo"
                eyebrow="Documentação e destino final"
                title="Fiscalização em dia, sem papelada."
                lead="Cada coleta gera um certificado de destinação do óleo vegetal usado. Você comprova, a qualquer momento, que o óleo do seu comércio teve o destino correto."
            />

            <div className="docs">
                <div>
                    <h3 className="docs__subtitle">Para onde vai o seu óleo</h3>
                    <ol className="journey">
                        {oilJourney.map(({ title, text }) => (
                            <li key={title} className="reveal">
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="docs__trust">
                        <FaCheckCircle aria-hidden="true" />
                        Destino final na Retióleo, empresa de gestão de resíduo de óleo com cerca de 20 anos de
                        mercado e licenciada pelos órgãos ambientais.
                    </p>
                </div>

                <CertificateMockup />
            </div>
        </div>
    </section>
);

export default Documentation;
