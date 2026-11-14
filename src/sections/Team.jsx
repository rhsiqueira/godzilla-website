import React from 'react';
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { contact, team } from '../data/site';

const Team = () => (
    <section className="section" aria-labelledby="equipe-titulo">
        <div className="container">
            <SectionTitle
                id="equipe-titulo"
                eyebrow="Segurança"
                title="Equipe de coleta autorizada"
                lead="Só estas pessoas coletam em nome da Godzilla. Desconsidere qualquer mensagem ou abordagem de quem não faz parte do nosso quadro oficial."
            />

            <div className="team">
                {team.map(({ name, image }) => (
                    <figure key={name} className="team-card reveal">
                        <div className="team-card__photo">
                            <img src={image} alt={`Foto de ${name}`} width="200" height="267" loading="lazy" />
                        </div>
                        <figcaption>
                            <span className="team-card__name">{name}</span>
                            <span className="team-card__badge">
                                <FaCheckCircle aria-hidden="true" />
                                Coletor autorizado
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>

            <aside className="notice reveal">
                <FaShieldAlt aria-hidden="true" className="notice__icon" />
                <p>
                    <strong>Evite golpes e fraudes.</strong> Nossos únicos canais oficiais são o WhatsApp{' '}
                    {contact.whatsappLabel}, o telefone {contact.phoneLabel} e o e-mail {contact.email}.
                </p>
            </aside>
        </div>
    </section>
);

export default Team;
