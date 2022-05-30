import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage'
import HomePage from './pages/HomePage';
import ErrorBoundary from './ErrorBoundary';
import BuyOrderPage from './pages/BuyOrderPage';


const Router = () => (
    <ErrorBoundary>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/buy_order" element={<BuyOrderPage />} />
        </Routes>
    </BrowserRouter>
    </ErrorBoundary>
);

export default Router;