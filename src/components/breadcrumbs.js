import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title, isBg }) => {
  return (
    <section
      id="all-blogs"
      className={`all-blogs hero__padding overflow-hidden position-relative ${isBg === "yes" ? "bg-one": "" }`}
    >
      <div className="container">
        <div className="row">
          <div className="blog-title">
            <h1
              className="display-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              {title}
            </h1>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <BiChevronRight />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
              >
                {title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
