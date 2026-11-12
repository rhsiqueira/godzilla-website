import React from 'react';
import { FaRegEnvelope, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ContactCard from '../components/ContactCard';
import { contact } from '../data/site';
import '../styles/fale-conosco.css';

const FaleConosco = () => (
    <>
        <PageHero eyebrow="Fale conosco" title="Canais oficiais de comunicação">
            <p>
                Nosso compromisso é proporcionar um atendimento seguro e eficaz. Junte-se às empresas parceiras
                que já confiam em nós e contribuem para um meio ambiente mais sustentável, ajudando a reciclar
                milhares de litros de óleo por mês.
            </p>
        </PageHero>

        <section className="section section--flush-top" aria-label="Canais de contato">
            <div className="container">
                <div className="contact-grid">
                    <ContactCard
                        icon={FaWhatsapp}
                        title="WhatsApp"
                        value={contact.whatsappLabel}
                        action="Iniciar conversa"
                        href={contact.whatsappUrl}
                        external
                    />
                    <ContactCard
                        icon={FaRegEnvelope}
                        title="E-mail"
                        value={contact.email}
                        action="Enviar e-mail"
                        href={contact.emailUrl}
                    />
                </div>

                <aside className="notice reveal">
                    <FaShieldAlt aria-hidden="true" className="notice__icon" />
                    <p>
                        <strong>Para garantir sua segurança</strong>, evite golpes e fraudes ao utilizar
                        exclusivamente os meios de contato listados nesta página.
                    </p>
                </aside>
            </div>
        </section>
    </>
);

export default FaleConosco;
