import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { FiPlay } from "react-icons/fi";
import data from "../data/hero.json";

const Herov3 = ({ isBg }) => {
  const { herov3 } = data;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

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
        <div className="row gx-5 align-items-center">
          <div className="col-md-7 mb-4 mb-md-0">
            <div className="hero__content position-relative">
              <div className="badge-text mb-2 text-uppercase">
                {herov3.subtitle}
              </div>
              <h1 className="display-4 mb-4 text-capitalize">{herov3.title}</h1>
              <p className="text-muted mb-5 fs-5">{herov3.description}</p>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="hero__images4 text-center">
              <img
                width="400"
                className="img-fluid img"
                src={herov3.image}
                alt=""
              />
              {herov3.videoURL === "" ? (
                ""
              ) : (
                <>
                  <a href={herov3.videoURL} className="glightbox3 video-btn">
                    <FiPlay />
                  </a>
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herov3;
