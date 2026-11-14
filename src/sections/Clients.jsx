import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { clients } from '../data/site';

const Clients = () => (
    <section className="section section--tint" aria-labelledby="clientes-titulo">
        <div className="container">
            <SectionTitle
                id="clientes-titulo"
                eyebrow="Quem confia na Godzilla"
                title="Mais de 110 comércios já transformam óleo em valor"
            />
            <ul className="clients">
                {clients.map((logo, index) => (
                    <li key={logo} className="clients__item reveal">
                        <img src={logo} alt={`Logo de cliente da Godzilla Coleta de Óleo ${index + 1}`} loading="lazy" />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Clients;
