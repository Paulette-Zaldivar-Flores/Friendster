import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMoneyBill } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CreateEventModal = ({ show, handleClose }) => {
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
          <input type="text" className="form-control" id="eventName" placeholder="Enter event name" />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">
            <FaCalendarAlt className="me-2" />
            Event Date
          </label>
          <input type="date" className="form-control" id="eventDate" />
        </div>
        <div className="mb-3">
          <label htmlFor="eventTime" className="form-label">
            <FaClock className="me-2" />
            Event Time
          </label>
          <input type="time" className="form-control" id="eventTime" />
        </div>
        <div className="mb-3">
          <label htmlFor="eventLocation" className="form-label">
            <FaMapMarkerAlt className="me-2" />
            Event Location
          </label>
          <input type="text" className="form-control" id="eventLocation" placeholder="Enter event location" />
        </div>
        <div className="mb-3">
          <label htmlFor="eventPrice" className="form-label">
            <FaMoneyBill className="me-2" />
            Event Price
          </label>
          <input type="text" className="form-control" id="eventPrice" placeholder="Enter event price" />
        </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={ handleClose }>
        Close
      </Button>
      <Button variant="info">
        Save Event
      </Button>
    </Modal.Footer>
    </Modal>
  );
};

CreateEventModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CreateEventModal;
