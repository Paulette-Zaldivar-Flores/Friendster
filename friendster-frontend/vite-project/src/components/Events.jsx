import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const eventDetails = [
    { id: 1, title: 'Lady Gaga', description: 'Live Concert', img: 'lady-gaga-card' },
    { id: 2, title: 'Artic Monkeys', description: 'Live Concert', img: 'arctic-monkeys-card' },
    { id: 3, title: 'Imagine Dragons', description: 'Live Concert', img: 'imag-dragons-card' },
    { id: 4, title: 'Foo Fighters', description: 'Live Concert', img: 'foo-fight-card' },
    { id: 5, title: 'The Black Keys', description: 'Live Concert', img: 'black-keys-card' },
    { id: 6, title: 'Twenty One Pilots', description: 'Live Concert', img: 'twtyone-card' },
    { id: 7, title: 'Muse', description: 'Live Concert', img: 'muse-card' },
    { id: 8, title: 'Radiohead', description: 'Live Concert', img: 'radiohead-card' },
  ];

  return (
    <div className="d-flex flex-wrap flex-row m-3">
      <div className="container align-self-center mb-2">
        <h3>8 Events near you...</h3>
        <div className="row">
          {eventDetails.map((event) => (
            <div className="col-md-3 mb-4" key={event.id}>
              <Link to={`/events/${event.id}`} className={`card ${event.img}`}>
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
    </div>
  );
};

export default Events;
