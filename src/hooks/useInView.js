import { useEffect, useRef, useState } from 'react';

// Informa quando o elemento entra na tela pela primeira vez.
const useInView = (threshold = 0.4) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || inView) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [inView, threshold]);

    return [ref, inView];
};

export default useInView;
