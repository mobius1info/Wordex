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
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/start" element={<PageLayout><WhereToStartPage language="ru" /></PageLayout>} />
        <Route path="/what-is-forex" element={<PageLayout><WhatIsForexPage language="ru" /></PageLayout>} />
        <Route path="/advantages" element={<PageLayout><ForexAdvantagesPage language="ru" /></PageLayout>} />
        <Route path="/prop-trading" element={<PageLayout><PropTradingPage language="ru" /></PageLayout>} />
        <Route path="/demo" element={<PageLayout><DemoAccountPage language="ru" /></PageLayout>} />
        <Route path="/account-types" element={<PageLayout><AccountTypesPage language="ru" /></PageLayout>} />
        <Route path="/trading-schedule" element={<PageLayout><TradingSchedulePage language="ru" /></PageLayout>} />
        <Route path="/market-surveys" element={<PageLayout><MarketSurveysPage language="ru" /></PageLayout>} />
        <Route path="/event-calendar" element={<PageLayout><EventCalendarPage language="ru" /></PageLayout>} />
        <Route path="/quotes" element={<PageLayout><QuotesPage language="ru" /></PageLayout>} />
        <Route path="/how-to-trade" element={<PageLayout><HowToTradePage language="ru" /></PageLayout>} />
        <Route path="/deposit-withdrawal" element={<PageLayout><DepositWithdrawalPage language="ru" /></PageLayout>} />
        <Route path="/glossary" element={<PageLayout><GlossaryPage language="ru" /></PageLayout>} />
        <Route path="/platforms" element={<PageLayout><PlatformsPage language="ru" /></PageLayout>} />
        <Route path="/trading-instruments" element={<PageLayout><TradingInstrumentsPage language="ru" /></PageLayout>} />
        <Route path="/about-company" element={<PageLayout><AboutCompanyPage language="ru" /></PageLayout>} />
        <Route path="/company-news" element={<PageLayout><CompanyNewsPage language="ru" /></PageLayout>} />
        <Route path="/contacts" element={<PageLayout><ContactsPage language="ru" /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
