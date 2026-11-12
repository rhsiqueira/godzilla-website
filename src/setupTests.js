// Matchers extras do jest-dom, ex.: expect(element).toBeInTheDocument()
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

// O react-router 7 usa TextEncoder/TextDecoder, ausentes no jsdom do Jest.
Object.assign(global, { TextEncoder, TextDecoder });

// O jsdom também não implementa estas APIs do navegador.
window.scrollTo = () => {};
