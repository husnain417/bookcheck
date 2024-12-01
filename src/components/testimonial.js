/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialData from "../data/testimonial.json";
import {IoMdQuote } from "react-icons/io"

const Testimonial = ({ isBg }) => {
  const { testimonial } = testimonialData;

  return (
    // <!-- ========== Testimonial section start ========== -->
    <section
      id="reviews"
      className={`section-padding testimonial ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >{testimonial.title}</span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {testimonial.subtitle}
              </h2>
              <div
                className="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
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
                      <div className="card-body p-4">
                        <div className="testi-card__quotation">
                          <IoMdQuote />
                        </div>
                        <p className="my-4">{data.description}</p>
                        <div className="testi-card__user-info pt-4">
                          <div className="testimonial__user-info__image">
                            <img src={data.image} alt={data.title} />
                          </div>
                          <div className="testimonial__user-info__content">
                            <h4 className="mb-0">{data.name}</h4>
                            <p className="mb-0">{data.title}</p>
                          </div>
                        </div>
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
    // <!-- ========== Testimonial section end ========== -->
  );
};

export default Testimonial;
