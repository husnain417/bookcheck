import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { FiPlay } from "react-icons/fi";
import data from "../data/about.json";
import { socialLink } from "../global";

const AuthorV2 = ({ isBg }) => {
  const { aboutv2 } = data;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);
  return (
    // <!-- ========== Author section start ========== -->
    <section
      id="author"
      className={`section-padding authorv2 ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{aboutv2.subtitle}</span>
              <h2 className="display-6">{aboutv2.title}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          {/* <!-- author image area start --> */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="authorv2__image">
              <img
                className="img-fluid"
                src={aboutv2.image}
                alt="Author"
              />
              {aboutv2.videoURL === "" ? (
                ""
              ) : (
                <>
                  <a href={aboutv2.videoURL} className="glightbox3 video-btn">
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
          {/* <!-- author image area end --> */}
          {/* <!-- author content area start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>{aboutv2.description}</p>
            <div className="authorv2__content">
              <div className="authorv2__list">
                <div className="row">
                  {aboutv2.userinfo?.map((data, i) => (
                    <div key={i} className="col-6 mb-3">
                      <h4>{data.title}</h4>
                      <p className="mb-0">{data.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
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
          {/* <!-- author content area end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default AuthorV2;
