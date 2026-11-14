import React from 'react';

// Título de seção: rótulo curto (eyebrow), título e texto de apoio opcional.
const SectionTitle = ({ eyebrow, title, lead, as: Heading = 'h2', align = 'center', id }) => (
    <div className={`section-title section-title--${align}`}>
        {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
        <Heading id={id} className="section-title__heading">
            {title}
        </Heading>
        {lead && <p className="section-title__lead">{lead}</p>}
    </div>
);

export default SectionTitle;
