import React from 'react';
import SectionTitle from '../components/SectionTitle';
import WhatsAppButton from '../components/WhatsAppButton';
import { paymentOptions } from '../data/site';

const Payment = () => (
    <section className="section section--tint" aria-labelledby="pagamento-titulo">
        <div className="container">
            <SectionTitle
                id="pagamento-titulo"
                eyebrow="Formas de receber"
                title="Você escolhe como receber pelo óleo"
                lead="O crédito na Espaço do Gourmet é a opção que mais rende, mas não é a única."
            />

            <ul className="payment">
                {paymentOptions.map(({ id, featured, tag, title, value, text, action, message }) => (
                    <li key={id} className="payment__card reveal" data-featured={Boolean(featured)}>
                        {tag && <span className="payment__tag">{tag}</span>}
                        <h3>{title}</h3>
                        <p className="payment__value">{value}</p>
                        <p>{text}</p>
                        <WhatsAppButton message={message} variant={featured ? 'primary' : 'ghost'} icon={false}>
                            {action}
                        </WhatsAppButton>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Payment;
