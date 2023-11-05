import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  const eventDetails = {
    1: { title: 'Lady Gaga', description: 'Live Concert' },
    2: { title: 'Event 2', description: 'Category of Event 2' },
    3: { title: 'Event 3', description: 'Category of Event 3' },
    4: { title: 'Event 4', description: 'Category of Event 4' },
    5: { title: 'Event 5', description: 'Category of Event 5' },
    6: { title: 'Event 6', description: 'Description of Event 6' },
    7: { title: 'Event 7', description: 'Category of Event 7' },
    8: { title: 'Event 8', description: 'Category of Event 8' },
  };

  const event = eventDetails[id];

  if (!event) {
    return (
      <div>
        <p>Event not found</p>
        <Link to="/">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>Event Details</h3>
      <h5 className="card-title">{event.title}</h5>
      <p className="card-text">{event.description}</p>
      <Link to="/">Back to Events</Link>
    </div>
  );
};

export default EventDetail;
