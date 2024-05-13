import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import PropTypes from 'prop-types';
import axios from 'axios';

const CreateEventModal = ({ show, handleClose, addEvent }) => {
  const [eventData, setEventData] = useState({
    name: '',
    // date: '',
    // time: '',
    // location: '',
    summary: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSave = () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    axios.post("http://localhost:3000/api/event/create", eventData, config)
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
          <label htmlFor="date" className="form-label">
            <FaCalendarAlt className="me-2" />
            Event Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            // value={eventData.date}
            // onChange={handleInputChange}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            <FaClock className="me-2" />
            Event Time
          </label>
          <input
            type="time"
            className="form-control"
            id="time"
            // value={eventData.time}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            <FaMapMarkerAlt className="me-2" />
            Event Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter event location"
            // value={eventData.location}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="summary" className="form-label">
            <BsPencil  className="me-2" />
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
