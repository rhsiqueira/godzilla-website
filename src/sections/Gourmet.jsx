import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import WhatsAppButton from '../components/WhatsAppButton';
import { credit, creditConditions, gourmetBenefits } from '../data/site';

const formatCurrency = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

// Simulador: litros por mês -> crédito mensal e anual na Espaço do Gourmet.
const CreditSimulator = () => {
    const [liters, setLiters] = useState(credit.defaultLiters);
    const monthly = liters * credit.perLiter;
    const progress = ((liters - credit.minLiters) / (credit.maxLiters - credit.minLiters)) * 100;

    return (
        <div className="simulator reveal">
            <p className="simulator__title">Simule o seu crédito</p>

            <label className="simulator__label" htmlFor="simulador-litros">
                Litros de óleo por mês
                <output htmlFor="simulador-litros" className="simulator__liters">
                    {liters} L
                </output>
            </label>
            <input
                id="simulador-litros"
                className="simulator__range"
                type="range"
                min={credit.minLiters}
                max={credit.maxLiters}
                step="10"
                value={liters}
                style={{ '--progress': `${progress}%` }}
                onChange={(event) => setLiters(Number(event.target.value))}
            />
            <div className="simulator__scale" aria-hidden="true">
                <span>{credit.minLiters} L</span>
                <span>{credit.maxLiters} L</span>
            </div>

            <dl className="simulator__results" aria-live="polite">
                <div>
                    <dt>Crédito por mês</dt>
                    <dd data-testid="credito-mensal">{formatCurrency(monthly)}</dd>
                </div>
                <div>
                    <dt>Crédito por ano</dt>
                    <dd data-testid="credito-anual">{formatCurrency(monthly * 12)}</dd>
                </div>
            </dl>

            <WhatsAppButton variant="accent" className="simulator__cta">
                Quero gerar esse crédito
            </WhatsAppButton>
        </div>
    );
};

const Gourmet = () => (
    <section id="espaco-do-gourmet" className="section dark gourmet" aria-labelledby="gourmet-titulo">
        <div className="container">
            <SectionTitle
                id="gourmet-titulo"
                eyebrow="Parceria Espaço do Gourmet"
                title="Seu óleo vira equipamento novo."
                lead="Em parceria com a Espaço do Gourmet, cada litro coletado gera R$ 4 em crédito na loja. Sem prazo de validade."
            />

            <ul className="gourmet__benefits">
                {gourmetBenefits.map(({ highlight, title, text }) => (
                    <li key={title} className="glass-card reveal">
                        <p className="glass-card__highlight">{highlight}</p>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </li>
                ))}
            </ul>

            <div className="gourmet__grid">
                <CreditSimulator />

                <div className="gourmet__conditions reveal">
                    <h3>Como funciona o crédito</h3>
                    <ul className="check-list">
                        {creditConditions.map((condition) => (
                            <li key={condition}>
                                <FaCheck aria-hidden="true" />
                                {condition}
                            </li>
                        ))}
                    </ul>
                    <WhatsAppButton message="credit" variant="outline">
                        Saiba mais sobre o crédito
                    </WhatsAppButton>
                    <p className="gourmet__seal">
                        Espaço do Gourmet: mais de 30 anos no mercado de food service.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Gourmet;
