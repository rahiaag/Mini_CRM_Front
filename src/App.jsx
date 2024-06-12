import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomerForm from './components/CustomerForm.jsx';
import OrderForm from './components/OrderForm.jsx';
import CampaignList from './components/CampaignList.jsx';
import AudienceCreationPage from './AudienceCreationPage.jsx';
import CampaignsPage from './CampaignsPage.jsx';
import LoginPage from './LoginPage.jsx';
import LandingPage from './LandingPage.jsx';
import Dashboard from './Dashboard.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <h1>Mini CRM Application</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
