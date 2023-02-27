import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EcoMarketLayout } from './components/EcoMarketLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <EcoMarketLayout />
      <Footer />
    </div>
  );
}

export default App;
