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
          <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Stay in touch</h3>
              <div className="footer-widget-content">
                <a href="mailto:sales@example.com" className="contact-link">events@friendster.com</a>
                <a href="mailto:support@example.com" className="contact-link red">support@friendster.com</a>
                <a href="tel:0121234" className="contact-link">(123) 456-789</a>
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
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Latest Events</h3>
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
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Upcoming Events</h3>
              <div className="footer-widget-content">
                <div className="images-gallery">
                  <ul>
                    <li><a href="#"><img src={ Event} width="60" height="60" alt="Event 3" /></a></li>
                    <li><a href="#"><img src={ Event} width="60" height="60" alt="Event 4" /></a></li>
                    <li><a href="#"><img src={ Event} width="60" height="60" alt="Event 5" /></a></li>
                    <li><a href="#"><img src={ Event} width="60" height="60"alt="Event 6" /></a></li>
                    <li><a href="#"><img src={ Event} width="60" height="60" alt="Event 7" /></a></li>
                    <li><a href="#"><img src={ Event} width="60" height="60"alt="Event 8" /></a></li>
                  </ul>
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
