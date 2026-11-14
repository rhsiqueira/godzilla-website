import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título principal e o link de agendamento com mensagem pronta', () => {
    render(<App />);
    expect(
        screen.getByRole('heading', { level: 1, name: /óleo de cozinha usado vale dinheiro/i })
    ).toBeInTheDocument();

    const [cta] = screen.getAllByRole('link', { name: /agendar coleta/i });
    expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5511946447239?text='));
});

test('o simulador calcula o crédito a R$ 4 por litro', () => {
    render(<App />);
    fireEvent.change(screen.getByRole('slider', { name: /litros de óleo por mês/i }), { target: { value: '200' } });
    expect(screen.getByTestId('credito-mensal')).toHaveTextContent(/R\$\s800/);
    expect(screen.getByTestId('credito-anual')).toHaveTextContent(/R\$\s9\.600/);
});
