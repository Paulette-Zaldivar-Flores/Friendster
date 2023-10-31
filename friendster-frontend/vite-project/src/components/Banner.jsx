import React, { useState } from 'react';

const Banner = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>
          Plan With Your <span className="gradient-text">Friends</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for an event..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className={`btn custom-purple-outline-btn ${inputValue ? 'active' : ''}`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
