import React from "react";

const Herov6 = ({ isBg }) => {
  return (
    //  <!-- ========== Hero section start ========== -->
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
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="hero__content position-relative">
              <h1 className="display-4 mb-2 text-capitalize">John Smith.</h1>
              <div className="badge-text fs-5 mb-4">
                Finance management book writer
              </div>
              <p className="mb-5 fs-5">
                I'm creative book writer based in Boston, and I'm very
                passionate and dedicate about my writings.
              </p>
              <a href="#author" className="button button__primary me-3">
                <span>Awarded books</span>
              </a>
              <a
                href="https://youtu.be/qg0_FinB6EE"
                className="glightbox3 btn__secondary"
              >
                <i className="icofont-play-alt-2"></i> About me
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero__author text-center">
              <div className="hero__author--inner3">
                <div className="hero__author--inner3--wrapper">
                  <img
                    width="500"
                    className="img-fluid"
                    src="assets/images/writer-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section end ========== -->
  );
};

export default Herov6;
