import React from 'react';

// Título de seção: um rótulo curto (eyebrow) acima do título principal.
// `as` define o nível do título (h1 no topo da página, h2 nas seções).
const SectionTitle = ({ eyebrow, title, as: Heading = 'h2', align = 'center', id }) => (
    <div className={`section-title section-title--${align}`}>
        {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
        <Heading id={id} className="section-title__heading">
            {title}
        </Heading>
    </div>
);

export default SectionTitle;
