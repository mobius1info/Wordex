import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import AdminPage from './pages/AdminPage.tsx';
import WhereToStartPage from './pages/WhereToStartPage.tsx';
import WhatIsForexPage from './pages/WhatIsForexPage.tsx';
import ForexAdvantagesPage from './pages/ForexAdvantagesPage.tsx';
import PropTradingPage from './pages/PropTradingPage.tsx';
import DemoAccountPage from './pages/DemoAccountPage.tsx';
import AccountTypesPage from './pages/AccountTypesPage.tsx';
import TradingSchedulePage from './pages/TradingSchedulePage.tsx';
import MarketSurveysPage from './pages/MarketSurveysPage.tsx';
import EventCalendarPage from './pages/EventCalendarPage.tsx';
import QuotesPage from './pages/QuotesPage.tsx';
import HowToTradePage from './pages/HowToTradePage.tsx';
import DepositWithdrawalPage from './pages/DepositWithdrawalPage.tsx';
import GlossaryPage from './pages/GlossaryPage.tsx';
import PlatformsPage from './pages/PlatformsPage.tsx';
import TradingInstrumentsPage from './pages/TradingInstrumentsPage.tsx';
import AboutCompanyPage from './pages/AboutCompanyPage.tsx';
import CompanyNewsPage from './pages/CompanyNewsPage.tsx';
import ContactsPage from './pages/ContactsPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/start" element={<WhereToStartPage />} />
        <Route path="/what-is-forex" element={<WhatIsForexPage />} />
        <Route path="/advantages" element={<ForexAdvantagesPage />} />
        <Route path="/prop-trading" element={<PropTradingPage />} />
        <Route path="/demo" element={<DemoAccountPage />} />
        <Route path="/account-types" element={<AccountTypesPage />} />
        <Route path="/trading-schedule" element={<TradingSchedulePage />} />
        <Route path="/market-surveys" element={<MarketSurveysPage />} />
        <Route path="/event-calendar" element={<EventCalendarPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/how-to-trade" element={<HowToTradePage />} />
        <Route path="/deposit-withdrawal" element={<DepositWithdrawalPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/trading-instruments" element={<TradingInstrumentsPage />} />
        <Route path="/about-company" element={<AboutCompanyPage />} />
        <Route path="/company-news" element={<CompanyNewsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
