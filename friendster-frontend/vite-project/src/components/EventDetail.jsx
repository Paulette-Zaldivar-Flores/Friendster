import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  const eventDetails = {
    1: {
      title: 'Lady Gaga',
      description: 'A high-energy spectacle featuring her chart-topping hits, avant-garde fashion, and powerful vocals.',
      day: 'Saturday',
      date: 'November 15, 2023',
      time: '5:30 pm',
      location: 'Orpheum Theatre, 842 S Broadway, Los Angeles, CA 90014, United States',
      price: '50.00',
      banner: '../assets/images/lady_gaga.png'
  },
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
    <>
     <div className="event-details-banner">
    </div>
    <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="event-details">
          <p>{event.day} {event.date}</p>
          <h2>{event.title}</h2>
          <h5>Description</h5>
          <p>{event.description}</p>
          <h5>Date and Time</h5>
          <p>{event.day} {event.date} @ {event.time}</p>
          <h5>Location</h5>
          <p>{event.location}</p>

        </div>
      </div>
      <div className="col-md-4">
        <div className="button-group mt-3 mb-3">
          <button className="btn btn-success">Like</button>
          <button className="btn btn-primary mx-2">Share</button>
        </div>
        <div className="ticket-details">
          <h5>Price</h5>
          <p>${event.price}</p>
          <button className="btn btn-danger mb-5">Buy Tickets</button>
        </div>
        <Link to="/">Back to Events</Link>
      </div>
    </div>
  </div>
  </>
);
};

export default EventDetail;
