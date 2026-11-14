// Matchers extras do jest-dom, ex.: expect(element).toBeInTheDocument()
import '@testing-library/jest-dom';

// O jsdom não implementa estas APIs do navegador usadas pela página.
window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} }));

window.IntersectionObserver =
    window.IntersectionObserver ||
    class {
        observe() {}
        disconnect() {}
    };
