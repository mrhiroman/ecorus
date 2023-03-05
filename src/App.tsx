import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EcoMarketLayout } from './components/EcoMarketLayout';
import { LoginModal } from 'components/Modals/LoginModal';

export const App = () => {
  const [isVisible, setVisible] = React.useState(true);
  return (
    <div className="App">
      <Header />
      <EcoMarketLayout />
      <Footer />
      <LoginModal isVisible={isVisible} onModalClose={() => setVisible(false)}/>
    </div>
  );
}

