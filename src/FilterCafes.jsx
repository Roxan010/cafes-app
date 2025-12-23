import React from 'react';

const FilterCafes = ({ value, onChange }) => {
  return (
    <div className="controls">
      <select name="subway" id="subway" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="All">Все</option>
      </select>
    </div>
  );
};

export default FilterCafes;