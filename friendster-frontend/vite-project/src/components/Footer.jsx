import React from 'react';
import Event from './../assets/event-image.jpg'

function Footer() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="footer">
      <div className="container">
        <div className="row">

          <div className="col-sm-8 vertical-ln">
            <div className="footer-widget">
              <h3>Contact Info</h3>
              <div className="footer-widget-content">
                <p className="nomar"><span className="material-symbols-outlined">mail</span></p>
                <a href="mailto:sales@example.com" className="contact-link">events@friendster.com</a>
                <a href="mailto:support@example.com" className="contact-link red padding-botm">support@friendster.com</a>
                <p className="nomar"><span className="material-symbols-outlined">call</span></p>
                <a href="tel:0121234" className="contact-link marbtm40">(123) 456-789</a>
              </div>
              <hr className="rounded"></hr>
            </div>


            <div className="footer-widget sm-mar-tp">
              <h3>Follow Us</h3>
              <div className="footer-widget-content">
                <div className="footer-social">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                  </ul>
                </div>
              </div>
              <hr className="rounded"></hr>
            </div>
          </div>

          <div className="col-sm-4 vertical-ln-rgt">
            <div className="footer-widget">
              <div>
                <h3>Latest Events</h3>
                <p><span className="material-symbols-outlined">notifications_active</span></p>
              </div>

              <div className="footer-widget-content">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                      className="media-object"
                      src={ Event}
                      width="60"
                      height="60"
                      alt="Event 1" /></a>
                  </div>
                  <div className="media-body">
                    <p><a href="#">Exciting Event 1</a></p>
                    <span>{today}</span>
                  </div>
                </div>

                <div className="media">
                  <div className="media-left">
                    <a href="#.">
                      <img
                      className="media-object"
                      src={ Event}
                      width="60"
                      height="60"
                      alt="Event 2" />
                      </a>
                  </div>
                  <div className="media-body">
                    <p><a href="#">Amazing Event 2</a></p>
                    <span>{today}</span>
                  </div>
                  <a href="#" className="pale-purple-btn">See More</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Footer;
