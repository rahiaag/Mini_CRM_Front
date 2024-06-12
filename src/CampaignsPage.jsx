
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignsPage = () => {
  const [audiences, setAudiences] = useState(null);
  const [campaigns, setCampaigns] = useState(null);

  useEffect(() => {
    const fetchAudiences = async () => {
      try {
        const response = await axios.get('/api/audiences');
        setAudiences(response.data);
      } catch (error) {
        console.error('Error fetching audiences:', error);
      }
    };

    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('/api/campaigns');
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchAudiences();
    fetchCampaigns();
  }, []);

  if (audiences === null || campaigns === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Campaigns</h1>
      <div>
        <h2>Audiences</h2>
        <ul>
          {audiences.map((audience) => (
            <li key={audience.id}>
              {audience.name} - {audience.size} members
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Campaigns Sent</h2>
        <ul>
          {campaigns.map((campaign) => (
            <li key={campaign.id}>
              {campaign.message} - {campaign.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignsPage;
