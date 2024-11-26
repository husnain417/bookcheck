import React from "react";
import data from "../data/books.json";

const Booksv1 = ({ isBg }) => {
  const { books } = data;
  return (
    // <!-- ========== Books section start ========== -->
    <section
      id="books"
      className={`booksv1 section-padding  ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{books.subtitle}</span>
              <h2 className="display-6">{books.title}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-6">
                <div className="booksv1__img--wrap">
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={books.image1}
                      alt="Book name"
                    />
                  </div>
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={books.image2}
                      alt="Book name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="booksv1__img--wrap m-50px-t md-m-0px-t">
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={books.image3}
                      alt="Book name"
                    />
                  </div>
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={books.image4}
                      alt="Book name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="booksv1__contnet">
              <div className="booksv1__contnet--badge mb-0">
                {books.booksItem.subtitle}
              </div>
              <h3 className="display-6 m-30px-b">{books.booksItem.title}</h3>
              <div className="booksv1__item--wrap">
                {books.booksItem?.booksItemContent?.map((data, i) => (
                  <div className="booksv1__item" key={i}>
                    <div className="booksv1__item--icon">
                      <img
                        className="img-fluid"
                        src={data.icon}
                        alt="Icon"
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="booksv1__item--text">
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Books section end ========== -->
  );
};

export default Booksv1;
