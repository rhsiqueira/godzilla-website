import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ValueCard from '../components/ValueCard';
import TeamCard from '../components/TeamCard';
import PartnershipTabs from '../components/PartnershipTabs';
import { team, values } from '../data/site';
import '../styles/sobre-nos.css';

const SobreNos = () => (
    <>
        <PageHero eyebrow="Sobre nós" title="Godzilla Coleta de Óleo" />

        <section className="section section--flush-top">
            <div className="container about">
                <div className="about__media">
                    <div className="about__shape" aria-hidden="true" />
                    <video
                        className="about__video"
                        src="/god-coleta.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        preload="metadata"
                        aria-label="Vídeo da equipe Godzilla em uma coleta de óleo"
                    />
                    <img
                        className="about__photo"
                        src="/baldes.jpg"
                        alt="Tambores azuis cheios de óleo vegetal usado, prontos para a reciclagem"
                        width="1200"
                        height="1600"
                        loading="lazy"
                    />
                </div>

                <div className="about__text">
                    <p className="lead">
                        Somos a Godzilla Coleta de Óleo, empresa no segmento da reciclagem de óleo vegetal, com
                        mais de 10 anos de experiência e parceria com seus fornecedores e clientes.
                    </p>
                    <p>
                        A Godzilla vem se destacando no mercado pela experiência e projetos que potencializam os
                        clientes.
                    </p>
                    <p>
                        Hoje, com nossa estrutura e parcerias estratégicas, conseguimos atender grandes empresas
                        deste setor. Inclusive você também: venha ser nosso parceiro.
                    </p>
                    <Link to="/fale-conosco" className="btn btn--primary">
                        Seja nosso parceiro
                    </Link>
                </div>
            </div>
        </section>

        <section className="section section--tint" aria-labelledby="valores-titulo">
            <div className="container">
                <SectionTitle id="valores-titulo" eyebrow="Nossos valores" title="O que nos move" />
                <div className="values">
                    {values.map((value) => (
                        <ValueCard key={value.title} {...value} />
                    ))}
                </div>
            </div>
        </section>

        <PartnershipTabs />

        <section className="section" aria-labelledby="operacao-titulo">
            <div className="container">
                <SectionTitle id="operacao-titulo" eyebrow="Operação" title="Equipe de coleta autorizada" />
                <p className="section__lead">
                    Confira abaixo a equipe autorizada de coleta. Para sua segurança, é crucial desconsiderar
                    qualquer mensagem ou abordagem de pessoas que não façam parte do nosso quadro oficial de
                    coleta. Dessa forma, evitamos possíveis fraudes e roubos.
                </p>
                <div className="team">
                    {team.map((member) => (
                        <TeamCard key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default SobreNos;
