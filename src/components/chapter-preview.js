import GLightbox from "glightbox";
import React, { useEffect, useState,useContext } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/chapterPreview.json";
import { CartContext } from '../components/CartContext';
import '../assets/css/books.css';


const ChapterPreview = ({ isBg }) => {
  const { featuredBooks } = data;
  const [cartItems, setCartItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    GLightbox({
      selector: ".glightbox-book",
      slideEffect: "zoom",
      mobileConfig: {
        width: '100%',
        height: '100%',
        touchNavigation: true
      }
    });
  }, []);

  return (
    <section
      id="featured-books"
      className={`section-padding chapter-preview ${
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
                data-aos-delay="500">
                  {featuredBooks.subtitle}
                  </span>
                  <h2 className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="550">
                  {featuredBooks.title}
                  </h2>
                  <div className="section-divider divider-traingle" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="550"></div>
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
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {featuredBooks.books.map((book, i) => (
                <SwiperSlide key={book.id}>
                  <div className="swiper-slide p-5px-lr translateEffect2 book-slide-container">
                    <div className="book-image-wrapper">
                      <a
                        href={book.image}
                        className="glightbox-book position-relative"
                        data-glightbox={`description: .book-desc${i}; descPosition: right;`}
                      >
                        <img
                          className="chapter-img img-fluid book-image"
                          src={book.image}
                          alt={book.title}
                          style={{
                            objectFit: 'cover',
                            height: '350px',
                            width: '250px'
                          }}
                        />
                      </a>
                    </div>
                    <div className="book-details">
                      <h4 className="book-title text-center mt-2">{book.title}</h4>
                      <p className="book-price text-center">
                        ${(book.price * (1 - book.discount / 100)).toFixed(2)}
                        <span className="original-price ml-2">
                          <del>${book.price.toFixed(2)}</del>
                        </span>
                      </p>
                      <div className="text-center">
                        <button 
                          className="btn btn-primary"
                          onClick={() => addToCart(book)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className={`glightbox-desc book-desc${i}`}>
                      <h3 className="mb-4 text-center">{book.title}</h3>
                      <p><strong>Course:</strong> {book.course}</p>
                      <p><strong>Author:</strong> {book.author}</p>
                      <p><strong>Description:</strong> {book.description}</p>
                      <div className="book-pricing mb-3">
                        <p>
                          <strong>Original Price:</strong> ${book.price.toFixed(2)}
                        </p>
                        <p>
                          <strong>Discount:</strong> {book.discount}%
                        </p>
                        <p>
                          <strong>Discounted Price:</strong> ${(book.price * (1 - book.discount / 100)).toFixed(2)}
                        </p>
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
  );
};

export default ChapterPreview;  