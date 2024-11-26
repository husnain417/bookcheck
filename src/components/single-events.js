import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const SingleEvents = () => {
  return (
    <section className="section-padding single-event">
      <div className="container">
        <div className="row">
          <div
            className="col-md-7 col-lg-8 col-xl-9 mb-4 mb-md-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="single-event__area">
              <div className="single-event__area__image">
                <img
                  className="img-fluid"
                  src="assets/images/events/1.jpg"
                  alt=""
                />
              </div>
              <div className="single-event__area__menu">
                <h2 className="fs-2">Discussion On Horror Thriller</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry’sstandard dummy text ever since the 1500s, when an
                  unknown printer took a galley of world horror Thriller. Lorem
                  ipsum dolor sit.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry’sstandard dummy text ever since the 1500s, when an
                  unknown printer took a galley of world horror Thriller. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
                  maxime officiis quos ipsam vitae aliquam assumenda atque
                  natus. Perspiciatis, corporis a! Sequi consequuntur ipsa quam
                  ad veritatis inventore doloribus doloremque.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry’sstandard dummy text ever since the 1500s, when an
                  unknown printer took a galley of world horror Thriller. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
                  maxime officiis quos ipsam vitae aliquam assumenda atque
                  natus. Perspiciatis, corporis a! Sequi consequuntur ipsa quam
                  ad veritatis inventore doloribus doloremque.
                </p>
                <div className="single-event__area__social">
                  <h2 className="fs-4">Share the event</h2>
                  <ul className="social-icon my-4">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com">
                        <IoLogoWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="right"
            className="col-md-5 col-lg-4 col-xl-3"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="single-event__sidebar">
              <h3 className="item-border text-center">Event Details</h3>
              <div className="single-event__sidebar__details item-border">
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    <div>
                      <p className="para-1">Date</p>
                      <p className="para-2">November 17, 2023</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-location-pin"></i>
                    <div>
                      <p className="para-1">Location</p>
                      <p className="para-2">Milan</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-location-arrow"></i>
                    <div>
                      <p className="para-1">Venue</p>
                      <p className="para-2">San Siro Stadium</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-flag"></i>
                    <div>
                      <p className="para-1">Address</p>
                      <p className="para-2">Strada 2a, MI, Italy</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-user-alt-3"></i>
                    <div>
                      <p className="para-1">Organizer</p>
                      <p className="para-2">Cloud inc.</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-price"></i>
                    <div>
                      <p className="para-1">Price</p>
                      <p className="para-2">$10</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-price"></i>
                    <div>
                      <p className="para-1">Remaining Tickets</p>
                      <p className="para-2">180 Tickets</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-phone"></i>
                    <div>
                      <p className="para-1">Phone</p>
                      <p className="para-2">+00879564</p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-email"></i>
                    <div>
                      <p className="para-1">Email</p>
                      <p className="para-2">email@email.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <a href="/#" className="button button__primary">
                  <span>Purchase Ticket</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleEvents;
