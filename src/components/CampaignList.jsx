import React, { useState, useEffect } from 'react';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('/api/campaigns')
     .then((response) => response.json())
     .then((data) => setCampaigns(data));
  }, []);

  return (
    <ul>
      {campaigns.map((campaign) => (
        <li key={campaign._id}>{campaign.name}</li>
      ))}
    </ul>
  );
};

export default CampaignList;