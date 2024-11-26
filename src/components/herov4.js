import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { BiPlayCircle } from "react-icons/bi";
import data from "../data/hero.json";

const Herov4 = ({ isBg }) => {
  const { herov4 } = data;

  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    <section
      id="hero"
      className={`hero hero4 hero__padding overflow-hidden position-relative ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="circle x1"></div>
      <div className="circle x2"></div>
      <div className="circle x3"></div>
      <div className="circle x4"></div>
      <div className="circle x5"></div>
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="hero__content position-relative">
              <div className="badge-text mb-2 fs-3 fw-bold">Hello,</div>
              <h1 className="display-4 mb-2 text-capitalize">
                I am {herov4.name}
              </h1>
              <div className="badge-text mb-4 fs-5 fw-bold">{herov4.title}</div>
              <p className="mb-5 fs-5">{herov4.description}</p>
              <div>
                <a href="#books" className="smooth button button__primary me-3">
                  <span>{herov4.firstBtn}</span>
                </a>

                <a href={herov4.videoURL} className="glightbox3 btn__secondary">
                  <BiPlayCircle />
                  {herov4.secondBtn}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero__author text-center">
              <div className="hero__author--inner">
                <div
                  className="hero__author--inner--pic d-flex align-items-end justify-content-center"
                  style={{ backgroundImage: `url(${herov4.image})` }}
                ></div>
                <div className="frame frame-1"></div>
                <div className="frame frame-2"></div>
                <div className="frame frame-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herov4;
