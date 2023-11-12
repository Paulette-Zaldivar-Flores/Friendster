import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  const eventDetails = {
    1: { title: 'Lady Gaga', description: 'A high-energy spectacle featuring her chart-topping hits, avant-garde fashion, and powerful vocals.' },
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
      <div className="noevent-card">
        <div className="noevent-content">
          <h1 className="gradient-text">No Events Found</h1>
          <Link className="pale-purple-btn" to="/">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
    <div className="banner">
      <h1>Lady Gaga</h1>
    </div>
    <div className="row">
      {/* First Column */}
      <div className="col-md-8">
        <div className="event-details">
          <p>Saturday November 12, 2023</p>
          <h2>{event.title}</h2>
          <h5>Description</h5>
          <p>{event.description}</p>
          <h5>Date and Time</h5>
          <p>Saturday November 12, 2023 @ 5:30pm</p>
          <h5>Location</h5>
          <p>Orpheum Theatre, 842 S Broadway, Los Angeles, CA 90014, United States</p>
          <Link to="/">Back to Events</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="button-group">
          <button className="btn btn-success mx-2">Like</button>
          <button className="btn btn-primary">Share</button>
        </div>
        <div className="ticket-details">
          <h5>Price</h5>
          <p>$50.00</p>
          <button className="btn btn-danger">Buy Tickets</button>
        </div>
      </div>
    </div>
  </div>
);
};

export default EventDetail;
