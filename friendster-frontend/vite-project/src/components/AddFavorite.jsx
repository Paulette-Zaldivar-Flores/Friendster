import React from 'react';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getAuth } from "firebase/auth";

const AddFavorite = ({eventid, err, success}) => {
  const auth = getAuth();
  let user = auth.currentUser;
  const favData = {
    event_id: parseInt(eventid),
    user_id: user.uid
  };

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
        success('Added to favorites.');
      })
      .catch((error) => {
        console.log(favData);
        console.error("Error creating favorite", error.response.data);
        err(`Issue creating favorite: ${error.response.data.message}`);
      });
  };

  return (
    <React.Fragment>
      <button className="btn btn-circle love-btn mx-1" onClick={handleSave}>
      <FaHeart/>
      </button>
    </React.Fragment>
  );
};

AddFavorite.propTypes = {
  eventid: PropTypes.string.isRequired,
  err: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired
};

export default AddFavorite;
