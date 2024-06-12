import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Rule from './Rule';
import AudiencePreview from './AudiencePreview';

const AudienceForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [rules, setRules] = useState([]);
  const [audienceSize, setAudienceSize] = useState(0);

  const handleAddRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const handleRemoveRule = (index) => {
    setRules(rules.filter((rule, i) => i !== index));
  };

  const handleSaveAudience = async (data) => {
    // Call API to save audience and get audience size
    const response = await fetch('/api/audience', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const audienceSize = await response.json();
    setAudienceSize(audienceSize);
  };

  return (
    <form onSubmit={handleSubmit(handleSaveAudience)}>
      <h2>Create Audience</h2>
      {rules.map((rule, index) => (
        <Rule
          key={index}
          index={index}
          field={rule.field}
          operator={rule.operator}
          value={rule.value}
          onRemove={handleRemoveRule}
        />
      ))}
      <button type="button" onClick={handleAddRule}>
        Add Rule
      </button>
      <button type="submit">Save Audience</button>
      <AudiencePreview audienceSize={audienceSize} rules={rules} />
    </form>
  );
};

export default AudienceForm;