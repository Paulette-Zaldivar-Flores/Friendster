import React, { useState } from 'react';
import { FaCalendarAlt, FaFlag, FaBookmark, FaClock, FaMapMarkerAlt, FaMoneyBill } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import Arctic from '../assets/images/arctic_monkeys.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import User from '../assets/images/user.jpg'

function MyEvents() {
  const interests = ["Music", "Sports", "Art", "Technology", "Food", "Travel", "Fashion", "Fitness"];
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  const openCreateEventModal = () => {
    setShowCreateEventModal(true);
    // Additional logic for handling the modal can be added here
  };

  const closeCreateEventModal = () => {
    setShowCreateEventModal(false);
  };
  return (
    <div className = "MyEvents">
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-md-4">
          <div className='d-flex justify-content-center align-items-center'>
          <img
            src= { User }
            alt="User"
            className="img-fluid user-image"
            style={{ width: '300px', height: '300px', borderRadius: '50%'}}
          />
          </div>
          <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Events I am...</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FaCalendarAlt className="icon" /> Attending
                  </li>
                  <li className="list-group-item">
                    <FaFlag className="icon" /> Hosting
                  </li>
                  <li className="list-group-item">
                    <FaBookmark className="icon" /> Saved
                  </li>
                  <li className="list-group-item">
                    <MdAdd className="icon" /> <a href="#" className= "create-event-link" onClick={ openCreateEventModal } >Create Event
                    </a>
                      </li>
                </ul>
              </div>
            </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Calendar</h5>
              <label htmlFor="datepicker">Select a date:</label>
              <input type="date" id="datepicker" name="datepicker" />
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-3 mb-3">
            <div className="card-body">
              <h5 className="card-title">My Interests</h5>
              <div className="d-flex flex-wrap">
                {interests.map((interest, index) => (
                  <span key={index} className="badge bg-custom-color rounded-pill m-1 p-3">{interest}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="card-deck">
            <div className="card shadow-sm mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src= { Arctic } className="img-fluid rounded-start" alt="Event 1" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Arctic Monkeys</h5>
                    <p className="card-text"><span className = "event-date">Friday December 8, 2023 </span> <br/>Rock out to the indie and alternative tunes of Arctic Monkeys in a high-energy live performance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="path/to/event-image2.jpg" className="img-fluid rounded-start" alt="Event 2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Event 2</h5>
                    <p className="card-text">Description for Event 2.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="path/to/event-image3.jpg" className="img-fluid rounded-start" alt="Event 3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Event 3</h5>
                    <p className="card-text">Description for Event 3.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="path/to/event-image4.jpg" className="img-fluid rounded-start" alt="Event 4" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Event 4</h5>
                    <p className="card-text">Description for Event 4.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <Modal show={showCreateEventModal} onHide={closeCreateEventModal}>
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
          <Button variant="secondary" onClick={closeCreateEventModal}>
            Close
          </Button>
          <Button variant="info">
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


  );
}

export default MyEvents;
