import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMoneyBill } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CreateEventModal = ({ show, handleClose, addEvent }) => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventPrice: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSave = () => {
    // Validate your data here before saving
    // ...

    // Add the new event to the existing events
    addEvent(eventData);

    // Close the modal
    handleClose();
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
            <FaMoneyBill className="me-2" />
            Event Description
          </label>
          <input
            type="text"
            className="form-control"
            id="eventPrice"
            placeholder="Enter description"
            value={eventData.eventDescription}
            onChange={handleInputChange}
          />
        </div>
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
