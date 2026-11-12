import React from 'react';
import SectionTitle from './SectionTitle';

// Cabeçalho padrão das páginas internas.
const PageHero = ({ eyebrow, title, children }) => (
    <section className="page-hero">
        <div className="container page-hero__inner">
            <SectionTitle as="h1" eyebrow={eyebrow} title={title} />
            {children && <div className="page-hero__lead">{children}</div>}
        </div>
    </section>
);

export default PageHero;
