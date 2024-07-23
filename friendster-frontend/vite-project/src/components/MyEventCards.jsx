import React, { useState, useEffect, useCallback  } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaStickyNote, FaTrash } from 'react-icons/fa';
import Arctic from '../assets/images/arctic_monkeys.jpg';
import Lady from '../assets/images/lady_gaga.png';
import Dragons from '../assets/images/imagine_dragons.jpg';

const MyEventCards = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Lady Gaga', eventDescription: 'Live Concert', eventDate: 'Thu Jan 01 2024', eventTime: '7:00:00 AM', img: `${Lady}` },
    { id: 2, title: 'Artic Monkeys', eventDescription: 'Live Concert', eventDate: 'Thu Jan 01 2024', eventTime: '9:00:00 AM', img: `${Arctic}` },
    { id: 3, title: 'Imagine Dragons', eventDescription: 'Live Concert', eventDate: 'Thu Jan 02 2024', eventTime: '10:00:00 AM', img: `${Dragons}` }
  ]);

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
        <div className="card shadow-sm mb-3 zoom-card" key={event.id}>
          <Link to={`/events/${event.id}`} className={`card ${event.img} text-decoration-none`}>
            <div className="row g-0">
              <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4">
                <img src={event.img} style={{objectFit: 'cover', height: '100%', width: '100%'}} className="img-fluid rounded-start" alt={event.title} />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-7 col-xl-8">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">
                    <FaCalendarAlt size={20} />{' '}
                    <span className="event-date">{event.eventDate}</span>
                    <br />
                    <FaClock size={20} />{' '}
                    <span className="event-time">{event.eventTime}</span>
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
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MyEventCards;
