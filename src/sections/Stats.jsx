import React from 'react';
import CountUp from '../components/CountUp';
import { stats } from '../data/site';

const Stats = () => (
    <section className="stats dark" aria-label="A Godzilla em números">
        <dl className="container stats__grid">
            {stats.map(({ label, text, ...count }) => (
                <div key={label} className="stats__item">
                    <dt>{label}</dt>
                    <dd>{text ?? <CountUp {...count} />}</dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Stats;
