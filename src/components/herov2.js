import React from "react";

import { BiPlayCircle } from "react-icons/bi";
import data from "../data/hero.json";

const Herov2 = ({ isBg }) => {
  const { herov2 } = data;

  return (
    <section
      id="hero"
      className={`hero hero__padding overflow-hidden position-relative ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="circle x1"></div>
      <div className="circle x2"></div>
      <div className="circle x3"></div>
      <div className="circle x4"></div>
      <div className="circle x5"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-6 m-0px-b md-m-40px-b">
            <div className="hero__content position-relative">
              <h1 className="display-4 mb-4 text-capitalize">{herov2.title}</h1>
              <p className="text-muted mb-5 fs-5">{herov2.description}</p>
              <div>
                <a
                  href="#pricing"
                  className="smooth button button__primary me-3"
                >
                  <span>{herov2.buyBtn}</span>
                </a>
                <a
                  href="https://youtu.be/dkxiTpwm0hs"
                  className="glightbox3 btn__secondary"
                >
                  <BiPlayCircle /> {herov2.aboutBtn}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-lg-1 text-center">
            <div className="hero__images3">
              <img
                width="400"
                className="img-fluid"
                src={herov2.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herov2;
