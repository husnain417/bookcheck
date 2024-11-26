import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../data/achieve.json";

const Achievev3 = ({ isBg }) => {
  const { achivev3 } = data;
  return (
    <section
      id="benefits"
      className={`achieve3 section-padding  ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <div className="row">
              <div className="col-md-11 offset-1 ms-0">
                <div className="section-title-left text-center text-md-start">
                  <h2 className="display-6">{achivev3.title}</h2>
                  <p className="text-muted mb-5 fs-5">{achivev3.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="row">
              <div
                className="col-md-6 mb-4 mb-md-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="achieve3__item h-100 translateEffect1">
                  <div className="achieve__icon m-20px-b">
                    <img
                      className="img-fluid"
                      src={achivev3.achieveItem1.icon}
                      alt="icon"
                      width="40"
                      height="40"
                    />
                  </div>
                  <h3 className="m-15px-b">{achivev3.achieveItem1.title}</h3>
                  <p>{achivev3.achieveItem1.description}</p>
                  <Link to="/#" className="link">
                    {achivev3.achieveItem1.linkBtn}
                    <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>

              <div
                className="col-md-6 mb-4 mb-md-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="achieve3__item h-100 translateEffect1">
                  <div className="achieve__icon m-20px-b">
                    <img
                      className="img-fluid"
                      src={achivev3.achieveItem2.icon}
                      alt="icon"
                      width="40"
                      height="40"
                    />
                  </div>
                  <h3 className="m-15px-b">{achivev3.achieveItem2.title}</h3>
                  <p>{achivev3.achieveItem2.description}</p>
                  <Link to="/#" className="link">
                    {achivev3.achieveItem2.linkBtn}
                    <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="achieve3__item h-100 translateEffect1">
              <div className="achieve__icon m-20px-b">
                <img
                  className="img-fluid"
                  src={achivev3.achieveItem3.icon}
                  alt="icon"
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="m-15px-b">{achivev3.achieveItem3.title}</h3>
              <p>{achivev3.achieveItem3.description}</p>
              <Link to="/#" className="link">
                {achivev3.achieveItem3.linkBtn}
                <MdKeyboardArrowRight />
              </Link>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="achieve3__item h-100 translateEffect1">
              <div className="achieve__icon m-20px-b">
                <img
                  className="img-fluid"
                  src={achivev3.achieveItem4.icon}
                  alt="icon"
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="m-15px-b">{achivev3.achieveItem4.title}</h3>
              <p>{achivev3.achieveItem4.description}</p>
              <Link to="/#" className="link">
                {achivev3.achieveItem4.linkBtn}
                <MdKeyboardArrowRight />
              </Link>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 mb-4 mb-md-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="achieve3__item h-100 translateEffect1">
              <div className="achieve__icon m-20px-b">
                <img
                  className="img-fluid"
                  src={achivev3.achieveItem5.icon}
                  alt="icon"
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="m-15px-b">{achivev3.achieveItem5.title}</h3>
              <p>{achivev3.achieveItem5.description}</p>
              <Link to="/#" className="link">
                {achivev3.achieveItem5.linkBtn}
                <MdKeyboardArrowRight />
              </Link>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 mb-4 mb-md-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="achieve3__item h-100 translateEffect1">
              <div className="achieve__icon m-20px-b">
                <img
                  className="img-fluid"
                  src={achivev3.achieveItem6.icon}
                  alt="icon"
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="m-15px-b">{achivev3.achieveItem6.title}</h3>
              <p>{achivev3.achieveItem6.description}</p>
              <Link to="/#" className="link">
                {achivev3.achieveItem6.linkBtn}
                <MdKeyboardArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievev3;
