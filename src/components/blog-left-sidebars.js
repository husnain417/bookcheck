import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

const BlogLeftSidebars = () => {
    return (
        <section className="section-padding all-blog2">
        <div className="container">
          <div className="row">
            <div
              id="right"
              className="col-md-5 col-lg-4 col-xl-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="all-blog2__sidebar">
                <form>
                  <input type="text" placeholder="Search" />
                  <BsSearch />
                </form>
                <div className="all-blog2__sidebar__categories item-border">
                  <h2 className="fs-4 mb-3">Blog Categories</h2>
                  <ul>
                    <li>
                      <Link to="/#">Accessories</Link>(2)
                    </li>
                    <li>
                      <Link to="/#">Blog</Link>(8)
                    </li>
                    <li>
                      <Link to="/#">Clocks</Link>(4)
                    </li>
                    <li>
                      <Link to="/#">Home Accent</Link>(1)
                    </li>
                    <li>
                      <Link to="/#">Lighting</Link> (3)
                    </li>
                    <li>
                      <Link to="/#">Post Format</Link>(9)
                    </li>
                    <li>
                      <Link to="/#">Sofas</Link>(1)
                    </li>
                    <li>
                      <Link to="/#">Table &amp; Desk</Link>(2)
                    </li>
                    <li>
                      <Link to="/#">Uncategorized</Link> (10)
                    </li>
                  </ul>
                </div>
                <div className="all-blog2__sidebar__latest-news item-border">
                  <h2 className="fs-4 mb-3">Latest News</h2>
                  <div className="all-blog2__sidebar__latest-news__item">
                    <div className="all-blog2__sidebar__latest-news__item__image">
                      <Link to="/single-blog">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-1.jpg"
                          className=""
                          alt="Sidebar 01"
                        />
                      </Link>
                    </div>
                    <div className="all-blog2__sidebar__latest-news__item__content">
                      <h4 className="fs-5 title">
                        <Link to="/single-blog">
                          Amazon Editors’ personal audiobook favorites
                        </Link>
                      </h4>
                      <p className="mb-0">On October 3, 2016</p>
                    </div>
                  </div>
                  <div className="all-blog2__sidebar__latest-news__item">
                    <div className="all-blog2__sidebar__latest-news__item__image">
                      <Link to="/single-blog">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-2.jpg"
                          alt="Sidebar 02"
                        />
                      </Link>
                    </div>
                    <div className="all-blog2__sidebar__latest-news__item__content">
                      <h4 className="fs-5 title">
                        <Link to="/single-blog">
                          Simply ipsum is lorem dummy text
                        </Link>
                      </h4>
                      <p className="mb-0">On October 14, 2016</p>
                    </div>
                  </div>
                  <div className="all-blog2__sidebar__latest-news__item">
                    <div className="all-blog2__sidebar__latest-news__item__image">
                      <Link to="/single-blog">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-3.jpg"
                          alt="Sidebar 03"
                        />
                      </Link>
                    </div>
                    <div className="all-blog2__sidebar__latest-news__item__content">
                      <h4 className="fs-5 title">
                        <Link to="/single-blog">
                          Lorem Ipsum dummy simply text is
                        </Link>
                      </h4>
                      <p className="mb-0">On October 14, 2016</p>
                    </div>
                  </div>
                  <div className="all-blog2__sidebar__latest-news__item">
                    <div className="all-blog2__sidebar__latest-news__item__image">
                      <Link to="/single-blog">
                        <img
                          width="80"
                          height="80"
                          src="assets/images/blog/sidebar-image-4.jpg"
                          className=""
                          alt="Sidebar 04"
                        />
                      </Link>
                    </div>
                    <div className="all-blog2__sidebar__latest-news__item__content">
                      <h4 className="fs-5 title">
                        <Link to="/single-blog">
                          Books with sneaky sci-fi plots
                        </Link>
                      </h4>
                      <p className="mb-0">On October 14, 2016</p>
                    </div>
                  </div>
                </div>
                <div className="all-blog2__sidebar__archive item-border">
                  <h2 className="fs-4 mb-3">Archives</h2>
                  <ul>
                    <li>
                      <Link to="/#">December 2019</Link>&nbsp;(1)
                    </li>
                    <li>
                      <Link to="/#">January 2019</Link>&nbsp;(7)
                    </li>
                    <li>
                      <Link to="/#">October 2018</Link>&nbsp;(1)
                    </li>
                    <li>
                      <Link to="/#">January 2018</Link>&nbsp;(1)
                    </li>
                    <li>
                      <Link to="/#">October 2017</Link>&nbsp;(1)
                    </li>
                    <li>
                      <Link to="/#">October 2016</Link>&nbsp;(10)
                    </li>
                  </ul>
                </div>
                <div className="all-blog2__sidebar__social item-border">
                  <h2 className="fs-4 mb-3">Social</h2>
                  <ul className="social-icon my-4">
                  <li>
                    <Link to="https://www.facebook.com/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.twitter.com/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.whatsapp.com">
                      <IoLogoWhatsapp />
                    </Link>
                  </li>
                  </ul>
                </div>
                <div className="all-blog2__sidebar__popular-tags item-border">
                  <h2 className="fs-4 mb-3">Popular Tags</h2>
                  <ul>
                    <li>
                      <Link to="/#">clocks</Link>
                    </li>
                    <li>
                      <Link to="/#">Home Accent</Link>
                    </li>
                    <li>
                      <Link to="/#">Lighting</Link>
                    </li>
                    <li>
                      <Link to="/#">sofas</Link>
                    </li>
                    <li>
                      <Link to="/#">table</Link>
                    </li>
                    <li>
                      <Link to="/#">table & desk</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-7 col-lg-8 col-xl-9 mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="all-blog2__area">
                <div className="all-blog2__area__image">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog_04.jpg"
                    alt="blog_04"
                  />
                </div>
                <div className="all-blog2__area__menu">
                  <ul>
                    <li>
                      <Link to="/" title="Posts by Lindsy Powers">
                        Lindsy Powers
                      </Link>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 className="fs-2">
                    <Link to="/single-blog">Books with sneaky sci-fi plots</Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <Link to="/single-blog" className="link">
                    Read more<i className="icofont-rounded-right"></i>
                  </Link>
                </div>
              </div>
              <div className="all-blog2__area">
                <div className="all-blog2__area__image">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog_05.jpg"
                    alt="blog_05"
                  />
                </div>
                <div className="all-blog2__area__menu">
                  <ul>
                    <li>
                      <Link to="/" title="Posts by Vannessa Cronin">
                        Vannessa Cronin
                      </Link>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 className="fs-2">
                    <Link to="/single-blog">Best science books of 2023 so far</Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <Link to="/single-blog" className="link">
                    Read more <FiChevronRight />
                  </Link>
                </div>
              </div>
              <div className="all-blog2__area">
                <div className="all-blog2__area__image">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog_06.jpg"
                    alt="blog_06"
                  />
                </div>
                <div className="all-blog2__area__menu">
                  <ul>
                    <li>
                      <Link to="/" title="Posts by Al Woodworth">
                        Al Woodworth
                      </Link>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 className="fs-2">
                    <Link to="/single-blog">
                      A.J. Jacobs’ favorite recent reads
                    </Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <Link to="/single-blog" className="link">
                    Read more
                    <FiChevronRight />
                  </Link>
                </div>
              </div>
              <div className="all-blog2__area">
                <div className="all-blog2__area__image">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog_07.jpg"
                    alt="blog_07"
                  />
                </div>
                <div className="all-blog2__area__menu">
                  <ul>
                    <li>
                      <Link to="/" title="Posts by Marcus Mann">
                        Marcus Mann
                      </Link>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 className="fs-2">
                    <Link to="/single-blog">
                      Books we’re talking about: film and TV edition
                    </Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <Link to="/single-blog" className="link">
                    Read more
                    <FiChevronRight />
                  </Link>
                </div>
              </div>
              <div className="all-blog2__area">
                <div className="all-blog2__area__image">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog_08.jpg"
                    alt="blog_08"
                  />
                </div>
                <div className="all-blog2__area__menu">
                  <ul>
                    <li>
                      <Link to="/" title="Posts by Seira Wilson">
                        Seira Wilson
                      </Link>
                    </li>
                    <li>/</li>
                    <li>DECEMBER 3, 2019</li>
                  </ul>
                  <h2 className="fs-2">
                    <Link to="/single-blog">Best romance books of 2023 so far</Link>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’sstandard dummy text ever since the 1500s, when an
                    unknown printer took a galley of...
                  </p>
                  <Link to="/single-blog" className="link">
                    Read more
                    <FiChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BlogLeftSidebars;