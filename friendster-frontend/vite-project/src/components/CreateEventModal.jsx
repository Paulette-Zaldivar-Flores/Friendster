import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import PropTypes from 'prop-types';
import axios from 'axios';

const CreateEventModal = ({ show, handleClose, addEvent }) => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventDescription: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSave = () => {
    axios.post("http://localhost:3000/api/event/create", eventData)
    .then(res => {
      console.log(res);
      console.log(res.data);
      addEvent(eventData);
      handleClose();
    })
    .catch((error) => {
      console.error('Error creating event', error);
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
          <label htmlFor="eventName" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            placeholder="Enter event name"
            value={eventData.eventName}
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
          <label htmlFor="eventTime" className="form-label">
            <FaClock className="me-2" />
            Event Time
          </label>
          <input
            type="time"
            className="form-control"
            id="eventTime"
            value={eventData.eventTime}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventLocation" className="form-label">
            <FaMapMarkerAlt className="me-2" />
            Event Location
          </label>
          <input
            type="text"
            className="form-control"
            id="eventLocation"
            placeholder="Enter event location"
            value={eventData.eventLocation}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDescription" className="form-label">
            <BsPencil  className="me-2" />
            Event Description
          </label>
          <input
            type="text"
            className="form-control"
            id="eventDescription"
            placeholder="Enter description"
            value={eventData.eventDescription}
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
      <Button variant="secondary" onClick={ handleClose }>
        Close
      </Button>
      <Button variant="info"  onClick={handleSave}>
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
