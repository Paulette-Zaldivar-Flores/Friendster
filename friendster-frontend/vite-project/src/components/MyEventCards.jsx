import React, { useState, useEffect, useCallback  } from 'react';
import { FaCalendarAlt, FaClock, FaStickyNote, FaTrash } from 'react-icons/fa';
import Arctic from '../assets/images/arctic_monkeys.jpg';
import { formatEventDate, formatEventTime } from '../utilities/utils';

const MyEventCards = () => {
  const [events, setEvents] = useState([ ]);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleDelete = useCallback((id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  }, [events]);

  return (
    <div className="card-deck">
    {events.map((event) => (
      <div className="card shadow-sm mb-3" key={event.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Arctic} className="img-fluid rounded-start" alt={event.eventName} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{event.eventName}</h5>
              <p className="card-text">
                <FaCalendarAlt size={20} />{' '}
                <span className="event-date">{formatEventDate(event.eventDate)}</span>
                <br />
                <FaClock size={20} />{' '}
                <span className="event-time">{formatEventTime(event.eventTime)}</span>
                <br />
                <FaStickyNote size={20} />{' '}
                {event.eventDescription}
              </p>
              <div className = "button-container">
                <button onClick={() => handleDelete(event.id)} className="btn btn-red mr-auto">
                <FaTrash size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default MyEventCards;
