import React, { useState } from 'react';

const Banner = () => {
  const [inputValue, setInputValue] = useState('');
  const [keywordValue, setKeywordValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeywordChange = (e) => {
    setKeywordValue(e.target.value);
  };

  const handleSearch = () => {
    // Here you can perform the search using 'inputValue' and 'keywordValue'.
    //Implement the search functionality and pass the criteria to  backend or data source.


    const searchCriteria = {
      keywords: keywordValue,
      location: inputValue,

    };

    // Send the 'searchCriteria' to our db or perform the search operation??.
  };

  return (
    <div className="banner p-1">
      <div className="banner-content">
        <h1>
          Plan With Your <span className="gradient-text">Friends</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for an event..."
            value={keywordValue}
            onChange={handleKeywordChange}
          />
          <button
            type="button"
            className={`btn custom-purple-outline-btn ${inputValue || keywordValue ? 'active' : ''}`}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
