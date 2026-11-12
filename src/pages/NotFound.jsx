import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const NotFound = () => (
    <PageHero eyebrow="Erro 404" title="Página não encontrada">
        <p>O endereço acessado não existe ou foi movido.</p>
        <Link to="/" className="btn btn--primary">
            Voltar para a Home
        </Link>
    </PageHero>
);

export default NotFound;
