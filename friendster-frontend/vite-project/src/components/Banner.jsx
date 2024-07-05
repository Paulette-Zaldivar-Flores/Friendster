import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Banner = () => {
  let navigate = useNavigate();
  const [searchq, setSearchq] = useState('');

  function search(e) {
    const urlEncodedTerm = encodeURI(searchq);
    navigate(`/search?title=${urlEncodedTerm}`);
    e.preventDefault();
  }

  return (
    <div className="banner p-1">
      <div className="banner-content">
        <h1>
          Plan With Your <span className="gradient-text">Friends</span>
        </h1>
        <form className="search-bar" onSubmit={search}>
          <input
            type="text"
            placeholder="Search for an event..."
            onChange={(e) => setSearchq(e.target.value)}
          />
          <button
            type="submit"
            className="btn custom-purple-outline-btn"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
