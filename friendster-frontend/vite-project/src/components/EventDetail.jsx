import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHeart, FaShare, FaCopy } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FacebookShareButton, FacebookIcon, LineShareButton, LineIcon } from 'react-share';
import { usePopper } from 'react-popper';

const EventDetail = () => {
  const { id } = useParams();
  const eventDetailsRef = useRef();
  const url = location.href;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {placement: "bottom-start"});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (eventDetailsRef.current) {
      eventDetailsRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [id]);

  const eventDetails = {
    1: {
      title: 'Lady Gaga',
      description: 'A high-energy spectacle featuring her chart-topping hits, avant-garde fashion, and powerful vocals.',
      day: 'Saturday',
      date: 'November 15, 2023',
      time: '5:30 pm',
      location: 'Orpheum Theatre, 842 S Broadway, Los Angeles, CA 90014, United States',
      price: '50.00',
      img: 'lady-gaga'
  },
  2: {
    title: 'Arctic Monkeys',
    description: 'Rock out to the indie and alternative tunes of Arctic Monkeys in a high-energy live performance.',
    day: 'Friday',
    date: 'December 8, 2023',
    time: '8:00 pm',
    location: 'The Forum, 3900 W Manchester Blvd, Inglewood, CA 90305, United States',
    price: '55.00',
    img: 'arctic-monkeys'
  },
  3: {
    title: 'Imagine Dragons',
    description: 'Experience the anthemic sound of Imagine Dragons in a concert filled with electrifying performances.',
    day: 'Saturday',
    date: 'January 15, 2024',
    time: '7:30 pm',
    location: 'Banc of California Stadium, 3939 S Figueroa St, Los Angeles, CA 90037, United States',
    price: '60.00',
    img: 'imag-dragons'
  },
  4: {
    title: 'Foo Fighters',
    description: 'Rock legends Foo Fighters will deliver a memorable performance featuring their classic hits and new releases.',
    day: 'Sunday',
    date: 'February 5, 2024',
    time: '6:15 pm',
    location: 'Hollywood Palladium, 6215 Sunset Blvd, Los Angeles, CA 90028, United States',
    price: '70.00',
    img: 'foo-fight'
  },
  5: {
    title: 'The Black Keys',
    description: 'Get ready for a night of blues-infused rock with The Black Keys as they showcase their signature sound.',
    day: 'Saturday',
    date: 'March 20, 2024',
    time: '7:45 pm',
    location: 'Greek Theatre, 2700 N Vermont Ave, Los Angeles, CA 90027, United States',
    price: '65.00',
    img: 'black-keys'
  },
  6: {
    title: 'Twenty One Pilots',
    description: 'Join the dynamic duo Twenty One Pilots for a concert filled with genre-blending music and energetic performances.',
    day: 'Friday',
    date: 'April 12, 2024',
    time: '9:00 pm',
    location: 'The Roxy Theatre, 9009 Sunset Blvd, West Hollywood, CA 90069, United States',
    price: '55.00',
    img: 'twtyone'
  },
  7: {
    title: 'Muse',
    description: 'Experience the theatrical and progressive rock of Muse in a visually stunning live performance.',
    day: 'Saturday',
    date: 'May 8, 2024',
    time: '8:30 pm',
    location: 'The Wiltern, 3790 Wilshire Blvd, Los Angeles, CA 90010, United States',
    price: '75.00',
    img: 'muse'
  },
  8: {
    title: 'Radiohead',
    description: 'Indulge in the experimental and art-rock sounds of Radiohead in a concert that pushes musical boundaries.',
    day: 'Sunday',
    date: 'June 2, 2024',
    time: '7:00 pm',
    location: 'The Greek Theatre, 2700 N Vermont Ave, Los Angeles, CA 90027, United States',
    price: '80.00',
    img: 'radiohead'
  },
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
    <div ref={ eventDetailsRef } />
    <div className={`${event.img}`}>
    </div>
    <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="event-details mt-3 ">
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
    <button className="btn btn-circle btn-success">
    <FaHeart/>
    </button>
    <button ref={setReferenceElement} onClick={() => setShow(!show)} className="btn btn-circle btn-primary mx-2">
      <FaShare />
    </button>
    {
        !show ? null : (
          <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="card position-absolute flex-row justify-content-center align-center shadow p-2">
            <button onClick={() => {navigator.clipboard.writeText(`${url}`); alert("Link copied.")}} className="btn btn-circle btn-secondary mx-2">
              <FaCopy />
            </button>
            <FacebookShareButton hashtag={"#friendster"} url="https://github.com/Paulette-Zaldivar-Flores/Friendster">
              <FacebookIcon className="mx-2" size={60} round={true} />
            </FacebookShareButton>
            <LineShareButton summary={"Check out this awesome event!"} url="https://github.com/Paulette-Zaldivar-Flores/Friendster">
              <LineIcon className="mx-2" size={60} round={true} />
            </LineShareButton>
          </div>
        )
      }
  </div>
        <div className="ticket-details">
          <h5>Price</h5>
          <p>${event.price}</p>
          <button className="btn btn-danger mb-5">Buy Tickets</button>
        </div>
        <Link className="pale-purple-link" to="/Home#events-section">
      <FaArrowLeft /> Back to Events
    </Link>
      </div>
    </div>
  </div>
  </>
);
};

export default EventDetail;
