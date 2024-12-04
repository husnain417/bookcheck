import React from "react";
import { useLocation } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

const SingleBlogs = () => {
  const location = useLocation();
  const { blogData } = location.state || {}; // Access the passed data

  if (!blogData) {
    return <div>No blog data found.</div>;
  }

  return (
    <div id="single-blog" className="section-padding single-blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <article>
              <img
                className="img-fluid"
                src={blogData.image}
                alt={blogData.title}
              />

              <ul className="single-blog__metainfo">
                <li>
                  <BiUser />
                  {blogData.author || "Unknown"}
                </li>
                <li>
                  <FaRegCalendarAlt />
                  {blogData.date || "No date available"}
                </li>
              </ul>
              <h2 className="display-5 single-blog__title">
                {blogData.title}
              </h2>
              <div className="single-blog__para">
                <p>{blogData.description}</p>
                <p>{blogData.content}</p>
                {/* Add more content if available */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;
