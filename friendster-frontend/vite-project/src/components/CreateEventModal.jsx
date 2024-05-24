import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import PropTypes from 'prop-types';
import axios from 'axios';

const CreateEventModal = ({ show, handleClose, addEvent }) => {
  const [eventData, setEventData] = useState({
    name: "",
    eventDate: '',
    starttime: "",
    endtime: "",
    location: '',
    summary: "",
  });
  const [locations, setLocations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Fetch locations from the database endpoint
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    };
    axios
      .get("http://localhost:3000/api/location/all", config)
      .then((res) => {
        // Update the locations state with fetched data
        console.log(res.data);
        setLocations(res.data);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSave = () => {
    console.log(eventData);
    console.log(localStorage.getItem("userToken"));
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    };
    console.log(JSON.stringify(eventData));
    axios
      .post("http://localhost:3000/api/event/create", eventData, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        addEvent(eventData);
        handleClose();
      })
      .catch((error) => {
        console.log(eventData);
        console.error("Error creating event", error);
        setErrorMessage('Issue creating event. Please try again.');
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Event Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter event name"
              value={eventData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="eventDate" className="form-label">
              <FaCalendarAlt className="me-2" />
              Event Date
            </label>
            <input
              type="date"
              className="form-control"
              id="eventDate"
                  value={eventData.eventDate}
                 onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="starttime" className="form-label">
              <FaClock className="me-2" />
              Start Time
            </label>
            <input
              type="time"
              className="form-control"
              id="starttime"
              value={eventData.starttime} // Update the value attribute
              onChange={handleInputChange} // Update the onChange event handler
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endtime" className="form-label">
              <FaClock className="me-2" />
              End Time
            </label>
            <input
              type="time"
              className="form-control"
              id="endtime"
              value={eventData.endtime} // Update the value attribute
              onChange={handleInputChange} // Update the onChange event handler
            />
          </div>


          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              <FaMapMarkerAlt className="me-2" />
              Event Location
            </label>
            <select
              className="form-select"
              id="location"
              value={eventData.location}
              onChange={handleInputChange}
            >
              <option value="">Select location</option>
              {locations.map((location) => (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="summary" className="form-label">
              <BsPencil className="me-2" />
              Event Description
            </label>
            <input
              type="text"
              className="form-control"
              id="summary"
              placeholder="Enter description"
              value={eventData.summary}
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger py-2" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="info" onClick={handleSave}>
          Save Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CreateEventModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
};

export default CreateEventModal;
