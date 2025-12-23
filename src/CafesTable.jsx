// src/CafesTable.jsx
import React, { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/cafes')
      .then((response) => response.json())
      .then((data) => setCafes(data));
  }, []);

  const filteredCafes = filter === 'All' ? cafes : cafes.filter((cafe) => cafe.subway === filter);

  return (
    <div className="cafesTable">
      <FilterCafes value={filter} onChange={setFilter} />
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
          <li key={cafe.id || cafe.name} className="card">
            <img src={cafe.image || 'https://via.placeholder.com/150'} alt="" />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subway}</p>
            <p>{cafe.hours}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;