import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getAuth } from "firebase/auth";


const AddFavorite = ({eventid}) => {
  const auth = getAuth();
  let user = auth.currentUser;
  const favData = {
    event_id: parseInt(eventid),
    user_id: user.uid
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 7000);

    setTimeout(() => {
      setSuccessMessage(null);
    }, 7000);

  }, [errorMessage, successMessage]);

  const handleSave = () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    };
    console.log(JSON.stringify(favData));

    axios
      .post("http://localhost:3000/api/favorite/create", favData, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSuccessMessage('Added to favorites.');
      })
      .catch((error) => {
        console.log(favData);
        console.error("Error creating favorite", error.response.data);
        setErrorMessage(`Issue creating favorite: ${error.response.data.message}`);
      });
  };

  return (
    <React.Fragment>
      {errorMessage && (
        <div className="alert alert-danger py-2" role="alert">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success py-2" role="alert">
          {successMessage}
        </div>
      )}
      <button className="btn btn-circle love-btn mx-1" onClick={handleSave}>
      <FaHeart/>
      </button>
    </React.Fragment>
  );
};

AddFavorite.propTypes = {
  eventid: PropTypes.string.isRequired
};

export default AddFavorite;
