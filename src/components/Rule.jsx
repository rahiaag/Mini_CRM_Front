import React from 'react';

const Rule = ({ index, field, operator, value, onRemove }) => {
  return (
    <div>
      <select value={field} onChange={(e) => console.log(e.target.value)}>
        <option value="">Select Field</option>
        <option value="total_spends">Total Spends</option>
        <option value="max_visits">Max Visits</option>
        <option value="last_visit">Last Visit</option>
      </select>
      <select value={operator} onChange={(e) => console.log(e.target.value)}>
        <option value="">Select Operator</option>
        <option value="gt">Greater Than</option>
        <option value="lt">Less Than</option>
        <option value="eq">Equal To</option>
      </select>
      <input type="text" value={value} onChange={(e) => console.log(e.target.value)} />
      <button type="button" onClick={() => onRemove(index)}>
        Remove
      </button>
    </div>
  );
};

export default Rule;