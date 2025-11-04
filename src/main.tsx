import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import WhereToStartPage from './pages/WhereToStartPage.tsx';
import TradingSchedulePage from './pages/TradingSchedulePage.tsx';
import HowToTradePage from './pages/HowToTradePage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/start" element={<WhereToStartPage />} />
        <Route path="/trading-schedule" element={<TradingSchedulePage />} />
        <Route path="/how-to-trade" element={<HowToTradePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
