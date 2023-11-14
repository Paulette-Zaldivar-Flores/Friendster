import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const eventDetails = [
    { id: 1, title: 'Lady Gaga', description: 'Live Concert' },
    { id: 2, title: 'Artic Monkeys', description: 'Live Concert' },
    { id: 3, title: 'Imagine Dragons', description: 'Live Concert' },
    { id: 4, title: 'Foo Fighters', description: 'Live Concert' },
    { id: 5, title: 'The Black Keys', description: 'Live Concert' },
    { id: 6, title: 'Twenty One Pilots', description: 'Live Concert' },
    { id: 7, title: 'Muse', description: 'Live Concert' },
    { id: 8, title: 'Radiohead', description: 'Live Concert' },
  ];

  return (
    <div className="container">
      <h3>8 Events near you...</h3>
      <div className="row">
        {eventDetails.map((event) => (
          <div className="col-md-3 mb-4" key={event.id}>
            <Link to={`/events/${event.id}`} className="card event-card">
              <div className="card-body d-flex flex-column">
                <div className="mt-auto">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
