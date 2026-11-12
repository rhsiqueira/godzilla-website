import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import { partnerships } from '../data/site';
import '../styles/partnership.css';

const ROTATION_MS = 30000;

const PartnershipTabs = () => {
    const [current, setCurrent] = useState(0);
    // A alternância automática para assim que a pessoa escolhe uma aba.
    const [autoRotate, setAutoRotate] = useState(true);
    const tabRefs = useRef([]);

    useEffect(() => {
        if (!autoRotate) return undefined;
        const interval = setInterval(() => {
            setCurrent((index) => (index + 1) % partnerships.length);
        }, ROTATION_MS);
        return () => clearInterval(interval);
    }, [autoRotate]);

    const select = (index) => {
        setAutoRotate(false);
        setCurrent(index);
    };

    // Navegação por teclado entre as abas (setas, Home e End).
    const onKeyDown = (event) => {
        const last = partnerships.length - 1;
        const next = {
            ArrowRight: current === last ? 0 : current + 1,
            ArrowLeft: current === 0 ? last : current - 1,
            Home: 0,
            End: last,
        }[event.key];

        if (next === undefined) return;
        event.preventDefault();
        select(next);
        tabRefs.current[next]?.focus();
    };

    const active = partnerships[current];

    return (
        <section className="partnership" aria-labelledby="parceria-titulo">
            <div className="container">
                <SectionTitle id="parceria-titulo" eyebrow="Parceria de sucesso" title={active.name} />

                <div className="partnership__tabs" role="tablist" aria-label="Parcerias" onKeyDown={onKeyDown}>
                    {partnerships.map((item, index) => (
                        <button
                            key={item.id}
                            ref={(element) => {
                                tabRefs.current[index] = element;
                            }}
                            type="button"
                            role="tab"
                            id={`aba-${item.id}`}
                            aria-selected={index === current}
                            aria-controls={`painel-${item.id}`}
                            tabIndex={index === current ? 0 : -1}
                            className="partnership__tab"
                            onClick={() => select(index)}
                        >
                            {item.tab}
                        </button>
                    ))}
                </div>

                <div
                    key={active.id}
                    role="tabpanel"
                    id={`painel-${active.id}`}
                    aria-labelledby={`aba-${active.id}`}
                    className="partnership__panel"
                >
                    {active.items.map((item) => (
                        <article key={item.title} className="partnership__card">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipTabs;
