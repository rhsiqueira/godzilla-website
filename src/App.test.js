import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza a página inicial com o título principal', () => {
    render(<App />);
    expect(
        screen.getByRole('heading', { level: 1, name: /impacto do óleo no meio ambiente/i })
    ).toBeInTheDocument();
});
