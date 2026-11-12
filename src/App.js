import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Parceiros from './pages/Parceiros';
import FaleConosco from './pages/FaleConosco';
import NotFound from './pages/NotFound';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sobre-nos" element={<SobreNos />} />
                <Route path="parceiros" element={<Parceiros />} />
                <Route path="fale-conosco" element={<FaleConosco />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
