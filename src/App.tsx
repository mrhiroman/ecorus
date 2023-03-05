import React from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EcoMarketLayout } from './components/EcoMarketLayout';
import { LoginModal } from 'components/Modals/LoginModal';

export const App = () => {
  const [isVisible, setVisible] = React.useState(true);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<EcoMarketLayout />} />
        <Route path="market" element={<EcoMarketLayout />} />
      </Routes>
      <Footer />
      <LoginModal isVisible={isVisible} onModalClose={() => setVisible(false)}/>
    </div>
  );
}

