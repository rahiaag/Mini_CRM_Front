import React, { useState } from 'react';
import axios from 'axios';

function AudienceCreationPage() {
  const [audienceRules, setAudienceRules] = useState([]);
  const [error, setError] = useState('');

  const addRule = () => {
    setAudienceRules([...audienceRules, { field: '', condition: '', value: '' }]);
  };

  const removeRule = (index) => {
    const updatedRules = [...audienceRules];
    updatedRules.splice(index, 1);
    setAudienceRules(updatedRules);
  };

  const handleChange = (index, field, value) => {
    const updatedRules = [...audienceRules];
    updatedRules[index][field] = value;
    setAudienceRules(updatedRules);
  };

  const createAudience = async () => {
    try {
      const response = await axios.post('/api/audience', { rules: audienceRules });
      console.log(response.data);
      setError('');
    } catch (error) {
      console.error(error);
      setError('Failed to create audience. Please try again.');
    }
  };
  

  return (
    <div>
      <h1>Create Audience</h1>
      {audienceRules.map((rule, index) => (
        <div key={index}>
          <select
            value={rule.field}
            onChange={(e) => handleChange(index, 'field', e.target.value)}
          >
            <option value="">Select Field</option>
            <option value="total_spends">Total Spends</option>
            <option value="max_visits">Max Visits</option>
            <option value="last_visit_date">Last Visit Date</option>
          </select>
          <select
            value={rule.condition}
            onChange={(e) => handleChange(index, 'condition', e.target.value)}
          >
            <option value="">Select Condition</option>
            <option value="greater_than">Greater Than</option>
            <option value="less_than">Less Than</option>
            <option value="equal_to">Equal To</option>
          </select>
          <input
            type="text"
            value={rule.value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
          />
          <button onClick={() => removeRule(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addRule}>Add Rule</button>
      <button onClick={createAudience}>Create Audience</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AudienceCreationPage;
