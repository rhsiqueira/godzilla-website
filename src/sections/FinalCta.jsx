import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';
import { company } from '../data/site';

const FinalCta = () => (
    <section className="final-cta dark" aria-labelledby="cta-titulo">
        <div className="container final-cta__inner">
            <h2 id="cta-titulo">
                Pronto para transformar seu óleo em <em>crédito?</em>
            </h2>
            <p>Agende a primeira coleta agora. Os recipientes são por nossa conta.</p>
            <WhatsAppButton variant="accent">Agendar coleta grátis</WhatsAppButton>
            <p className="final-cta__coverage">
                <FaMapMarkerAlt aria-hidden="true" />
                {company.coverage}
            </p>
        </div>
    </section>
);

export default FinalCta;
