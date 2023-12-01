import React, { useState } from 'react';
import { FaCalendarAlt, FaFlag, FaBookmark } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import Arctic from '../assets/images/arctic_monkeys.jpg';
import Modal from '../components/CreateEventModal';
import User from '../assets/images/user.jpg'

function MyEvents() {
  const interests = ["Music", "Sports", "Art", "Technology", "Food", "Travel", "Fashion", "Fitness"];
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);
  const [events, setEvents] = useState([]);


  const openCreateEventModal = () => {
    setShowCreateEventModal(true);
  };

  const closeCreateEventModal = () => {
    setShowCreateEventModal(false);
  };

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { id: prevEvents.length === 0 ? 1 : prevEvents[prevEvents.length - 1].id + 1, ...newEvent },
    ]);
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
              {events.map((event) => (
                <div className="card shadow-sm mb-3" key={event.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={ Arctic } className="img-fluid rounded-start" alt={event.eventName} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{event.eventName}</h5>
                        <p className="card-text"><span className="event-date">{event.eventDate}</span> <br>{event.eventDescription}</br></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal show={showCreateEventModal} handleClose={closeCreateEventModal} addEvent={addEvent} />
    </div>
  );
}


export default MyEvents;
