import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

const DURATION_MS = 1200;

// Número que conta de zero até `value` quando aparece na tela.
const CountUp = ({ value, prefix = '', suffix = '' }) => {
    const [ref, inView] = useInView();
    const [current, setCurrent] = useState(value);

    useEffect(() => {
        if (!inView) return undefined;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        let frame;
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - start) / DURATION_MS, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCurrent(Math.round(value * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value]);

    return (
        <span ref={ref}>
            {prefix}
            {current}
            {suffix}
        </span>
    );
};

export default CountUp;
