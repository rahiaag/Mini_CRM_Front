import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <p>Welcome to the Mini CRM Application</p>
      <div>
        <Link to="/login">Go to Login Page</Link>
      </div>
    </div>
  );
}

export default LandingPage;
