import React from "react";
import data from "../data/categories.json";
import '../assets/css/pricing.css';

const Categories = ({ isBg }) => {
  const { features } = data;

  return (
    // <!-- ========== Features section start ========== -->
    <section
      id="features"
      className={`section-padding features ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>collections</span>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* <!-- features cards start --> */}
          {features.featureItems?.map((feature, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <div className="features__item2 translateEffect1">
                {/* Image section */}
                <div className="features__img2">
                  <img src={feature.imgPath} alt={feature.title} />
                </div>
                {/* Title section */}
                <h3 className="features__title">{feature.title}</h3>
                {/* Description list */}
                <p className="features__list">
                {feature.description}
                </p>
                {/* Button */}
                <a href="/product1" className="button button__primary">
                  <span>{feature.btnText}</span>
                </a>
              </div>
            </div>
          ))}
          {/* <!-- features cards end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Features section end ========== -->
  );
};

export default Categories;
