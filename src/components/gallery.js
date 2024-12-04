import React, { useEffect, useState } from "react";
import Isotope from 'isotope-layout';
import { TbArrowUpRight } from "react-icons/tb";
import data from "../data/gallery.json";
import { Button, Modal } from "react-bootstrap";
import { FiCheck } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";


const Gallery = ({ isBg }) => {
  const { gallery } = data;

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedItem(null); // Reset selected item when closing
  };

  useEffect(() => {
    // Define the Isotope initialization function
    const initializeIsotope = () => {
      const grid = new Isotope(".gallery-active", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: 1, // Adjust based on your grid layout
        },
      });

      // Filter items on button click
      const menuItems = document.querySelectorAll(".gallery__menu li");
      menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", (event) => {
          const filterValue = menuItem.getAttribute("data-filter");
          grid.arrange({ filter: filterValue });

          // Update active class on the menu items
          menuItems.forEach((item) => item.classList.remove("active"));
          menuItem.classList.add("active");

          event.preventDefault();
        });
      });
    };

    // Add event listener for window load
    window.addEventListener("load", initializeIsotope);

    // Cleanup function
    return () => {
      window.removeEventListener("load", initializeIsotope);
    };
  }, []);

  return (
    <section id="gallery" className={`section-padding gallery ${isBg === "yes" ? "bg-one" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="150"
              >{gallery.title}</span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                {gallery.subtitle}
              </h2>
              <div
                className="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        {/* <div className="gallery__menu">
          <ul className="gallery__menu">
            {gallery.galleryMenu?.map((data, i) => (
              <li
                key={i}
                data-filter={data.title === "All Books" ? "*" : `.${data.title.toLowerCase()}`}
                className={data.title === "All Books" ? "active" : ""}
              >
                {data.title}
              </li>
            ))}
          </ul>

        </div> */}
        <div className="gallery__area row gallery-active">
          {gallery.galleryItem?.map((data, i) => (
            <div key={i} className={`grid-item col-xl-4 col-lg-4 col-md-6 ${data.id}`}>
              <div className="gallery__item m-15px-b m-15px-t">
                <img
                  src={data.image}
                  alt="gallery img"
                  data-bs-toggle="modal"
                  onClick={() => handleShow(data)}
                />
                <div className="gallery-title-wrapper">
                  <div className="gallery-title-wrapper--content">
                    <h2
                      className="fs-4"
                      data-bs-toggle="modal"
                      onClick={() => handleShow(data)}
                    >
                      <a href="#">{data.title}</a>
                    </h2>
                    <p>{data.subtitle}</p>
                  </div>
                  <button
                    type="button"
                    className="gallery__btn"
                    data-bs-toggle="modal"
                    onClick={() => handleShow(data)}
                  >
                    <TbArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedItem && (
          <Modal size="lg" show={show} onHide={handleClose}>
            <div className="gallery">
              <div className="modal-main">
                <Button className="close-btn" onClick={handleClose}>
                  <IoCloseSharp />
                </Button>

                <div className="gallery__inpormation__wrapper">
                  <div className="gallery__thumb">
                    <img
                      src={selectedItem.image} alt={selectedItem.title}
                    />
                  </div>
                  {selectedItem.clientMeta && (
                    <div className="gallery__client__meta row">
                      {selectedItem.clientMeta?.map((data, ii) => (
                        <div className="col-md-4">
                          <div className="client__meta">
                            <p>{data.metaName}</p>
                            <h5>{data.metaContent}</h5>
                          </div>
                        </div>
                      ))}
                      <hr className="hr" />
                    </div>
                  )}
                  <div className="gallery__details">
                    {selectedItem.title && (
                      <h3>{selectedItem.title}</h3>
                    )}
                    {selectedItem.content && (
                      <p>
                        {selectedItem.content}
                      </p>
                    )}
                    {selectedItem.detailList && (
                      <ul>
                        {selectedItem.detailList?.map((data, i) => (
                          data.title && (
                            <li key={i}>
                              <FiCheck />
                              <p>{data.title}</p>
                            </li>
                          )
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Gallery;
