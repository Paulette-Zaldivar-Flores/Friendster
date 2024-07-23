import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getAuth } from "firebase/auth";

const AddAttendee = ({eventid, err, success}) => {
  const auth = getAuth();
  let user = auth.currentUser;
  const attendeeData = {
    event_id: parseInt(eventid),
    user_id: user.uid
  };

  const handleSave = () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    };
    console.log(JSON.stringify(attendeeData));

    axios
      .post("http://localhost:3000/api/attendee/create", attendeeData, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        success('Joined event.');
      })
      .catch((error) => {
        console.log(attendeeData);
        console.error("Error creating attendee", error.response.data);
        err(`Issue joining event: ${error.response.data.message}`);
      });
  };

  return (
    <React.Fragment>
      <button className="btn btn-circle calendar-btn mx-1" onClick={handleSave}>
        <FaCalendarCheck />
      </button>
    </React.Fragment>
  );
};

AddAttendee.propTypes = {
  eventid: PropTypes.string.isRequired,
  err: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired
};

export default AddAttendee;
