import React, { useState, useEffect } from 'react';

const AudiencePreview = () => {
  const [audience, setAudience] = useState({ size: 0, rules: [] });

  useEffect(() => {
    fetch('/api/audiences/preview')
     .then((response) => response.json())
     .then((data) => setAudience(data));
  }, []);

  return (
    <div>
      <h2>Audience Preview</h2>
      <p>Size: {audience.size}</p>
      <p>Rules:</p>
      <ul>
        {audience.rules.map((rule) => (
          <li key={rule._id}>{rule.field} {rule.operator} {rule.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AudiencePreview;