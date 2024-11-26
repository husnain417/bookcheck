import React from "react";
import data from "../data/events.json";

import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Event = ({ isBg }) => {
  const { events } = data;
  return (
    // <!-- ========== Events section end ========== -->
    <section
      id="events"
      className={`section-padding event ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{events.title}</span>
              <h2 className="display-6">{events.subtitle}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {events.singleBlog.slice(0, 3).map((data, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <article className="events__single-event h-100 translateEffect1">
                <div className="events__single-event__image">
                  <Link to="/single-event">
                    <img className="img-fluid" src={data.image} alt="" />
                  </Link>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <Link to="/single-event">{data.title}</Link>
                    </h2>
                    <p className="m-0">{data.description}</p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <FaRegCalendarAlt /> {data.date} {data.month}, {data.year}
                    </div>
                    <div>
                      <FaMapMarkerAlt /> {data.location}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Events section end ========== -->
  );
};

export default Event;
