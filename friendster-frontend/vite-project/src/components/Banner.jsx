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
    <div className="banner">
      <div className="banner-content1">
        <div className="icons1"></div>
        <div className="icons2"></div>
        <div className="icons3"></div>
      </div>
      <div className="banner-content2">
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
      <div className="banner-content3">
        <div className="icons1"></div>
        <div className="icons2"></div>
        <div className="icons3"></div>
      </div>
    </div>
  );
};

export default Banner;
