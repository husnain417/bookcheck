import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { FiPlay } from "react-icons/fi";
import data from "../data/about.json";
import { socialLink } from "../global";
const Author = ({isBg}) => {
  const { about } = data;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    // <!-- ========== Author section start ========== -->
    <section
      id="author"
      className={`section-padding author ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{about.title}</span>
              <h2 className="display-6">{about.subtitle}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- author image --> */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="author__image">
              <img
                className="img-fluid img"
                src={about.image}
                alt="Author"
              />
              {about.videoURL === "" ? (
                ""
              ) : (
                <>
                  <a href={about.videoURL} className="glightbox3 video-btn">
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
          {/* <!-- author image end --> */}
          {/* <!-- author content start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="author__content">
              <h2 className="m-20px-b">Michale John</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nam eveniet veritatis aliquid harum temporibus et pariatur.
                Incidunt, labore voluptatum minima tenetur, consequatur odit
                sapiente blanditiis perferendis corrupti non quisquam?
              </p>
              <ul className="author__content__desc m-30px-b">
                {about.achievement?.map((data, i) => (
                  <li key={i}>
                    <img
                      className="img-fluid"
                      src={about.checkIcon}
                      alt="icon"
                      width="25"
                      height="25"
                    />{" "}
                    {data.achieves}
                  </li>
                ))}
              </ul>
              <ul className="social-icon mt-3">
                {socialLink.facebook === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.facebook}>
                      <img
                        className="img-fluid"
                        src="assets/icons/facebook.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.twitter === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.twitter}>
                      <img
                        className="img-fluid"
                        src="assets/icons/twitter.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.linkedin === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.linkedin}>
                      <img
                        className="img-fluid"
                        src="assets/icons/linkedin.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.youtube === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.youtube}>
                      <img
                        className="img-fluid"
                        src="assets/icons/youtube-play.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
                {socialLink.whatsapp === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.whatsapp}>
                      <img
                        className="img-fluid"
                        src="assets/icons/whatsapp.svg"
                        alt="icon"
                        width="25"
                        height="25"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/* <!-- author content start --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default Author;
