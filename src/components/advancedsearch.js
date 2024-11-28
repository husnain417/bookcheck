import React, { useState } from "react";
import "../assets/css/search.css";

const AdvancedSearch = () => {
  const [searchParams, setSearchParams] = useState({
    author: "",
    title: "",
    isbn: "",
    keywords: "",
    publisher: "",
    publishedDateMin: "",
    publishedDateMax: "",
    priceMin: "",
    priceMax: "",
    bookCondition: "any",
    course: "",
    semester: "",
    university: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Parameters:", searchParams);
  };

  return (
    <div className="contain">
      <div className="form">
      <h2 className="text-center mb-4">Advanced Book Search</h2>
      <form onSubmit={handleSearch} className="advanced-search-form">
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={searchParams.author}
            onChange={handleChange}
            placeholder="Enter author's name"
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={searchParams.title}
            onChange={handleChange}
            placeholder="Enter book title"
          />
        </div>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            name="isbn"
            className="form-control"
            value={searchParams.isbn}
            onChange={handleChange}
            placeholder="Enter ISBN number"
          />
        </div>
        <div className="form-group">
          <label>Keywords</label>
          <input
            type="text"
            name="keywords"
            className="form-control"
            value={searchParams.keywords}
            onChange={handleChange}
            placeholder="Enter keywords"
          />
        </div>
        <div className="form-group">
          <label>Publisher</label>
          <input
            type="text"
            name="publisher"
            className="form-control"
            value={searchParams.publisher}
            onChange={handleChange}
            placeholder="Enter publisher name"
          />
        </div>
        <div className="form-group">
          <label>Published Date</label>
          <div className="d-flex">
            <input
              type="date"
              name="publishedDateMin"
              className="form-control date me-2"
              value={searchParams.publishedDateMin}
              onChange={handleChange}
            />
            <input
              type="date"
              name="publishedDateMax"
              className="form-control date"
              value={searchParams.publishedDateMax}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Price (£)</label>
          <div className="d-flex">
            <input
              type="number"
              name="priceMin"
              className="form-control me-2"
              placeholder="Min"
              value={searchParams.priceMin}
              onChange={handleChange}
            />
            <input
              type="number"
              name="priceMax"
              className="form-control"
              placeholder="Max"
              value={searchParams.priceMax}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Book Condition</label>
          <div className="d-flex">
            <div className="form-check me-3">
              <input
                type="radio"
                name="bookCondition"
                value="any"
                checked={searchParams.bookCondition === "any"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Any</label>
            </div>
            <div className="form-check me-3">
              <input
                type="radio"
                name="bookCondition"
                value="new"
                checked={searchParams.bookCondition === "new"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">New</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="bookCondition"
                value="used"
                checked={searchParams.bookCondition === "used"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Used</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            name="course"
            className="form-control"
            value={searchParams.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />
        </div>
        <div className="form-group">
          <label>Semester</label>
          <input
            type="text"
            name="semester"
            className="form-control"
            value={searchParams.semester}
            onChange={handleChange}
            placeholder="Enter semester"
          />
        </div>
        <div className="form-group">
          <label>University</label>
          <input
            type="text"
            name="university"
            className="form-control"
            value={searchParams.university}
            onChange={handleChange}
            placeholder="Enter university name"
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="searchbtn mt-4">
            Search
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AdvancedSearch;
