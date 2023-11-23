import React from 'react';
import User from '../assets/images/user.jpg'
import { FaCalendarAlt, FaFlag, FaBookmark, FaHistory } from 'react-icons/fa';

function MyEvents() {
  const interests = ["Music", "Sports", "Art", "Technology", "Food", "Travel", "Fashion", "Fitness"];
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
                    <FaHistory className="icon" /> Past Events
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
              <h5 className="card-title">User Interests</h5>
              <div className="d-flex flex-wrap">
                {interests.map((interest, index) => (
                  <span key={index} className="badge bg-primary rounded-pill m-1">{interest}</span>
                ))}
              </div>
            </div>
          </div>


          <div className="card-deck">
            <div className="card">
              <img src="path/to/event-image1.jpg" className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <h5 className="card-title">Event 1</h5>
                <p className="card-text">Description for Event 1.</p>
              </div>
            </div>
            <div className="card">
              <img src="path/to/event-image2.jpg" className="card-img-top" alt="Event 2" />
              <div className="card-body">
                <h5 className="card-title">Event 2</h5>
                <p className="card-text">Description for Event 2.</p>
              </div>
            </div>
            <div className="card">
              <img src="path/to/event-image3.jpg" className="card-img-top" alt="Event 3" />
              <div className="card-body">
                <h5 className="card-title">Event 3</h5>
                <p className="card-text">Description for Event 3.</p>
              </div>
            </div>
            <div className="card">
              <img src="path/to/event-image4.jpg" className="card-img-top" alt="Event 4" />
              <div className="card-body">
                <h5 className="card-title">Event 4</h5>
                <p className="card-text">Description for Event 4.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MyEvents;
