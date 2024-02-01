import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHeart, FaShare, FaCopy, FaEnvelope } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { EmailShareButton } from 'react-share';
import { usePopper } from 'react-popper';
import { eventDetails } from './EventDetailInfo';

const EventDetail = () => {
  const { id } = useParams();
  const eventDetailsRef = useRef();
  const url = location.href;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {placement: "bottom-start"});
  const [show, setShow] = useState(false);
  const [copy, setCopy] = useState("Copy Link");
  const event = eventDetails[id];

  useEffect(() => {
    if (eventDetailsRef.current) {
      eventDetailsRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [id]);

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
            <div className="text-center">
              <button onClick={() => {navigator.clipboard.writeText(`${url}`); setCopy("Copied")}} className="btn btn-circle btn-secondary mx-2">
                <FaCopy className="" />
              </button>
              <p className="mb-0">{copy}</p>
            </div>
            <div className="text-center">
              <EmailShareButton subject={"Check out Friendster!"} body={"Sign up on Friendster, the go-to event sharing app!"} url={"https://github.com/Paulette-Zaldivar-Flores/Friendster"}>
                <FaEnvelope size="60" className="mx-1 fa-envelope"/>
              </EmailShareButton>
              <p className="mb-0">Email</p>
            </div>
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
