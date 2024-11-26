import React, { useState } from 'react';
import data from "../data/hero.json";
import '../assets/css/hero.css';

function CourseSearchForm() {
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [university, setUniversity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure at least one field is filled
    if (!course && !semester && !university) {
      setError('Please fill in at least one field: Course, Semester, or University.');
      return;
    }

    // If valid, log the data and clear the error
    setError('');
    console.log({ course, semester, university });
  };

  return (
    <div className="search-form-container">
      <h2 className="search-form-title">Find Your Books</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your course name"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Semester</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">University</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>
        
        <button type="submit" className="search-button">
          Search Books
        </button>
      </form>
    </div>
  );
}

const Hero = ({ isBg }) => {
  const { herov1 } = data;
  
  return (
    <section 
      id="hero" 
      className={`hero hero__padding overflow-hidden position-relative ${
        isBg === "yes" ? "bg-one" : ""
      } hero-section`}
    >
      <div className="circle x1"></div>
      <div className="circle x2"></div>
      <div className="circle x3"></div>
      <div className="circle x4"></div>
      <div className="circle x5"></div>


      <div className="hero-left">
      <div className="badge-text mb-2 text-uppercase">
        {herov1.subtitle}
      </div>
        <CourseSearchForm />
      </div>

      <div className="hero-right">
        <img 
          src={herov1.image}
          alt="Books" 
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-text">
          <h1 className="hero-title">
            Compare Prices,
            <br />
            Explore Options,
            <br />
            And Buy Books
            <br />
            Tailored To Your Course
            <br />
            And Institution
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
