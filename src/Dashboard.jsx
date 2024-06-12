import React from 'react';
import CustomerForm from './components/CustomerForm.jsx';
import OrderForm from './components/OrderForm.jsx';
import CampaignList from './components/CampaignList.jsx';
import AudienceCreationPage from './AudienceCreationPage.jsx';
import CampaignsPage from './CampaignsPage.jsx';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Create Customer</h3>
        <CustomerForm />
      </div>
      <div>
        <h3>Create Order</h3>
        <OrderForm />
      </div>
      <div>
        <h3>Campaign List</h3>
        <CampaignList />
      </div>
      <div>
        <h3>Create Audience</h3>
        <AudienceCreationPage />
      </div>
      <div>
        <h3>Campaigns Page</h3>
        <CampaignsPage />
      </div>
    </div>
  );
}

export default Dashboard;
