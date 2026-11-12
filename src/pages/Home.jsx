import React from 'react';
import { FaArrowDown, FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { contact, disposalSteps } from '../data/site';
import '../styles/home.css';

const Home = () => (
    <>
        <section className="hero">
            <div className="container hero__grid">
                <div className="hero__content">
                    <SectionTitle
                        as="h1"
                        align="start"
                        eyebrow="Bem-vindo à Godzilla Coleta de Óleo"
                        title="Entenda o impacto do óleo no meio ambiente"
                    />
                    <p className="lead">
                        A poluição da água pelo óleo é um problema grave, já que 1 litro de óleo pode contaminar
                        até 25 mil litros de água, impactando negativamente a vida aquática. Em nosso programa,
                        promovemos a educação ambiental e ensinamos como evitar o descarte inadequado de óleo,
                        com ênfase na preservação dos recursos hídricos.
                    </p>
                    <p className="hero__source">
                        Fonte:{' '}
                        <a
                            href="https://site.sabesp.com.br/site/interna/Default.aspx?secaoId=82"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sabesp
                        </a>
                    </p>
                    <div className="hero__actions">
                        <a
                            className="btn btn--primary"
                            href={contact.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp aria-hidden="true" />
                            Agendar coleta
                        </a>
                        <a className="btn btn--ghost" href="#descarte">
                            Como descartar
                            <FaArrowDown aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <figure className="hero__media">
                    <img
                        src="/imagem-home.jpg"
                        alt="Ilustração de óleo sendo despejado no mar e contaminando os peixes"
                        width="314"
                        height="302"
                    />
                    <figcaption className="hero__stat">
                        <strong>1 litro</strong>
                        <span>de óleo pode contaminar até</span>
                        <strong>25 mil litros</strong>
                        <span>de água</span>
                    </figcaption>
                </figure>
            </div>
        </section>

        <section id="descarte" className="section section--tint" aria-labelledby="descarte-titulo">
            <div className="container">
                <SectionTitle
                    id="descarte-titulo"
                    eyebrow="Descarte consciente"
                    title="Passo a passo para o descarte correto"
                />
                <p className="section__lead">
                    Assista ao vídeo e aprenda a maneira correta de lidar com o óleo usado.
                </p>

                <div className="disposal">
                    <ol className="steps">
                        {disposalSteps.map((step, index) => (
                            <li key={step} className="steps__item reveal">
                                <span className="steps__number" aria-hidden="true">
                                    {index + 1}
                                </span>
                                <div>
                                    <span className="steps__label">{index + 1}º passo</span>
                                    <p>{step}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="disposal__video reveal">
                        <video src="/descarte.mp4" controls preload="metadata" playsInline>
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Home;
