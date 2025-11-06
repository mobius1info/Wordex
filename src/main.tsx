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
import PageLayout from './components/PageLayout.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/start" element={<PageLayout><WhereToStartPage /></PageLayout>} />
          <Route path="/what-is-forex" element={<PageLayout><WhatIsForexPage /></PageLayout>} />
          <Route path="/advantages" element={<PageLayout><ForexAdvantagesPage /></PageLayout>} />
          <Route path="/prop-trading" element={<PageLayout><PropTradingPage /></PageLayout>} />
          <Route path="/demo" element={<PageLayout><DemoAccountPage /></PageLayout>} />
          <Route path="/account-types" element={<PageLayout><AccountTypesPage /></PageLayout>} />
          <Route path="/trading-schedule" element={<PageLayout><TradingSchedulePage /></PageLayout>} />
          <Route path="/market-surveys" element={<PageLayout><MarketSurveysPage /></PageLayout>} />
          <Route path="/event-calendar" element={<PageLayout><EventCalendarPage /></PageLayout>} />
          <Route path="/quotes" element={<PageLayout><QuotesPage /></PageLayout>} />
          <Route path="/how-to-trade" element={<PageLayout><HowToTradePage /></PageLayout>} />
          <Route path="/deposit-withdrawal" element={<PageLayout><DepositWithdrawalPage /></PageLayout>} />
          <Route path="/glossary" element={<PageLayout><GlossaryPage /></PageLayout>} />
          <Route path="/platforms" element={<PageLayout><PlatformsPage /></PageLayout>} />
          <Route path="/trading-instruments" element={<PageLayout><TradingInstrumentsPage /></PageLayout>} />
          <Route path="/about-company" element={<PageLayout><AboutCompanyPage /></PageLayout>} />
          <Route path="/company-news" element={<PageLayout><CompanyNewsPage /></PageLayout>} />
          <Route path="/contacts" element={<PageLayout><ContactsPage /></PageLayout>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
