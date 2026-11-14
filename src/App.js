import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import HowItWorks from './sections/HowItWorks';
import Gourmet from './sections/Gourmet';
import Payment from './sections/Payment';
import Documentation from './sections/Documentation';
import Portal from './sections/Portal';
import Clients from './sections/Clients';
import Team from './sections/Team';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';

const App = () => (
    <>
        <a className="skip-link" href="#conteudo">
            Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
            <Hero />
            <Stats />
            <HowItWorks />
            <Gourmet />
            <Payment />
            <Documentation />
            <Portal />
            <Clients />
            <Team />
            <Faq />
            <FinalCta />
        </main>
        <Footer />
        <WhatsAppFab />
    </>
);

export default App;
