/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialData from "../data/testimonial.json";

const Testimonialv2 = ({ isBg }) => {
  const { testimonial } = testimonialData;

  return (
    // <!-- ========== Testimonialv2 section start ========== -->
    <section
      id="reviews"
      className={`section-padding testimonialv2 ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{testimonial.subtitle}</span>
              <h2 className="display-6">{testimonial.title}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row testi-row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {testimonial.testimonialItem?.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="swiper-slide p-5px-lr">
                    <div className="testi-card card h-100 translateEffect1">
                      <div className="card-body text-center p-4">
                        <img src={data.image} alt={data.title} />
                        <h2 className="testimonialv2__card-title">{data.name}</h2>
                        <h4 className="testimonialv2__card-subtitle">
                          {data.title}
                        </h4>
                        <p className="pt-2 lh-base">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Testimonialv2 section end ========== -->
  );
};

export default Testimonialv2;
