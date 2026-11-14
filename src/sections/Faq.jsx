import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { faq } from '../data/site';

const Faq = () => (
    <section id="duvidas" className="section" aria-labelledby="duvidas-titulo">
        <div className="container faq">
            <SectionTitle id="duvidas-titulo" eyebrow="Dúvidas frequentes" title="O que os comércios mais perguntam" />
            <div className="faq__list">
                {faq.map(({ question, answer }) => (
                    <details key={question} className="faq__item">
                        <summary>{question}</summary>
                        <p>{answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
);

export default Faq;
