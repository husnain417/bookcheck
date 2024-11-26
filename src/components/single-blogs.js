import React from 'react';
import { BiUser } from "react-icons/bi";
import {
  FaFacebookF,
  FaLinkedinIn, FaRegCalendarAlt, FaRegCommentDots, FaTwitter, FaYoutube
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

const SingleBlogs = () => {
    return (
        <div id="single-blog" className="section-padding single-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <article>
                <img
                  className="img-fluid"
                  src="/assets/images/blog/single-blog.jpg"
                  alt="single-blog"
                />

                <ul className="single-blog__metainfo">
                  <li>
                    <BiUser />
                    <Link to="/#">John</Link>
                  </li>
                  <li>
                    <FaRegCalendarAlt />
                    <Link to="/#">12 May, 2023</Link>
                  </li>
                  <li>
                    <FaRegCommentDots /> <Link to="/#">3 Comments</Link>
                  </li>
                </ul>
                <h2 className="display-5 single-blog__title">
                  Books with sneaky sci-fi plots
                </h2>
                <div className="single-blog__para">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt labore et dolore sitor magna
                    aliqua. Quis ipsum suspendisse ultrices{" "}
                    <strong>gravida</strong>. Risus commodo viverra manas
                    accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <p>
                    No sea takimata sanctus est Lorem
                    <Link to="/">Ipsum</Link> dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et.
                  </p>
                  <blockquote className="single-blog__para__quote">
                    <span className="single-blog__para__quote__icon">
                      <i className="icofont-quote-right"></i>
                    </span>
                    <div className="single-blog__para__quote__text">
                      <p>
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed cum fuga ab, eum numquam ea dolores quae
                        takimata sanctus est Lorem amet ducimus Lorem ipsum,
                        dolor sit amet consectetur adipisicing amet"
                      </p>
                    </div>
                  </blockquote>
                  <h2 className="display-6 single-blog__title">
                    Amazon Editors’ personal audiobook favorites
                  </h2>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluniti atqup quos dolores et
                    quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum
                    quidem rerum .
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6 mb-4">
                      <div className="post-img">
                        <img
                          className="img-fluid"
                          src="/assets/images/blog/blog_01.jpg"
                          alt="blog_01"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="post-img">
                        <img
                          className="img-fluid"
                          src="/assets/images/blog/blog_02.jpg"
                          alt="blog_02"
                        />
                      </div>
                    </div>
                  </div>
                  <h2 className="display-6 single-blog__title">
                    Best mysteries and thrillers of 2023 so far
                  </h2>
                  <ol>
                    <li>
                      Mauris ut in vestibulum hasellus ultrices fusce nibh
                      justo, venenatis, amet. Lectus quam.
                    </li>
                    <li>
                      Consectetur phasellus <strong>ultrices</strong> fusce nibh
                      justo, venenatis, amet. Lectus quam.
                    </li>
                    <li>
                      Lectus quam there are two thing is very important in
                      Consectetur phasellus ultrices fusce.
                    </li>
                  </ol>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua at vero amet dolor sit
                    consect.
                  </p>
                  <ul className="content-feature-list">
                    <li>
                      <i className="icofont-check-circled"></i> Lorem ipsum
                      dolor, sit amet.
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i> Amet consectetur
                      adipisicing elit Officia.
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i> Aquaerat ipsa
                      quis possimus.
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i> Lorem aquaerat
                      ipsa quis possimus.
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i> Consectetur Amet
                      adipisicing elit Officia.
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    <strong>adipisicing</strong> elit, sed do eiusmod tempor
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in
                    <Link to="/">sed</Link> uia non numquam eius modi tempora
                    incidunt ut labore dolor.
                  </p>
                </div>
              </article>
              <div className="single-blog__share bg-one p-4">
                <strong>Share:</strong>
                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com">
                      <IoLogoWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="single-blog__comment">
                <div className="single-blog__comment__title">
                  <h4>
                    <span>3</span> Comments
                  </h4>
                </div>
                <div className="single-blog__comment__wrap">
                  <div className="single-blog__comment__item bg-one">
                    <div className="single-blog__comment__item__image">
                      <img
                        className="img-fluid"
                        src="/assets/images/user-1.png"
                        alt="user-1"
                      />
                    </div>
                    <div className="single-blog__comment__item__content">
                      <div className="comment-author-info">
                        <div className="row align-items-start">
                          <div className="col-md-9 col-12 order-md-1 order-1">
                            <h5>Olivic Dsuza</h5>
                            <p className="comment-date">
                              Feb 15, 2023 | 10:21 am
                            </p>
                          </div>
                          <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                            <a href="#cmt-form" className="reply-btn">
                              Reply
                            </a>
                          </div>
                          <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                            <div className="comment-text">
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog__comment__item md-m-0px-l m-40px-l bg-one">
                    <div className="single-blog__comment__item__image">
                      <img
                        className="img-fluid"
                        src="/assets/images/user-2.png"
                        alt="user-2"
                      />
                    </div>
                    <div className="single-blog__comment__item__content">
                      <div className="comment-author-info">
                        <div className="row align-items-start">
                          <div className="col-md-9 col-12 order-md-1 order-1">
                            <h5>Everly Leah</h5>
                            <p className="comment-date">
                              Mar 30, 2023 | 12:33 am
                            </p>
                          </div>
                          <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                            <a href="#cmt-form" className="reply-btn">
                              Reply
                            </a>
                          </div>
                          <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                            <div className="comment-text">
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog__comment__item bg-one">
                    <div className="single-blog__comment__item__image">
                      <img
                        className="img-fluid"
                        src="/assets/images/user-1.png"
                        alt="user-1"
                      />
                    </div>
                    <div className="single-blog__comment__item__content">
                      <div className="comment-author-info">
                        <div className="row align-items-start">
                          <div className="col-md-9 col-12 order-md-1 order-1">
                            <h5>Michel Jackson</h5>
                            <p className="comment-date">
                              Feb 15, 2023 | 10:21 am
                            </p>
                          </div>
                          <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                            <a href="#cmt-form" className="reply-btn">
                              Reply
                            </a>
                          </div>
                          <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                            <div className="comment-text">
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-blog__comment__form bg-one">
                  <div className="m-25px-b">
                    <h4>Leave A Comment</h4>
                    <p>
                      Your email address will not be published. Required fields
                      are marked.
                    </p>
                  </div>
                  <form action="#" className="comment-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Name*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Email Address*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="url"
                            name="website"
                            id="website"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="messages"
                            id="messages"
                            cols="30"
                            rows="5"
                            placeholder="Please Enter Your Comment Here"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="m-20px-t">
                      <button className="button button__primary">
                        <span>POST A COMMENT</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleBlogs;