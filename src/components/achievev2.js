import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../data/achieve.json";

const Achievev2 = ({ isBg }) => {
  const { achivev2 } = data;
  return (
    <section
      id="benefits"
      className={`achivev2 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title-left text-center text-lg-start">
              <h2 className="display-6">{achivev2.title}</h2>
              <p className="text-muted mb-5 fs-5">{achivev2.description}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {achivev2.achieveItem?.map((data, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mb-4 mb-lg-0 achivev2__items"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <div className="achivev2__item h-100 translateEffect1">
                <div className="achieve__icon m-20px-b">
                  <img
                    className="img-fluid"
                    src={data.icon}
                    alt="icon"
                    width="40"
                    height="40"
                  />
                </div>
                <h3 className="m-15px-b">{data.title}</h3>
                <p>{data.description}</p>
                <Link to="/#" className="link">
                  {data.linkBtn}{" "}
                  <MdKeyboardArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievev2;
