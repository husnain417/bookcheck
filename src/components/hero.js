import React, { useState } from 'react';
import formdatahero from '../data/formdatahero.json';
import '../assets/css/hero.css';
import { useNavigate } from 'react-router-dom'; 
import data from "../data/hero.json";

function CourseSearchForm() {
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [university, setUniversity] = useState('');
  const [year, setYear] = useState('');
  const [faculty, setFaculty] = useState('');
  const [degreeProgram, setDegreeProgram] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure at least one field is filled
    if (!course && !semester && !university && !year && !faculty && !degreeProgram) {
      setError('Please fill in at least one field.');
      return;
    }

    // If valid, log the data and clear the error
    setError('');
    navigate('/search', {
      state: {
        course,
        semester,
        university,
        year,
        faculty,
        degreeProgram,
      },
    });
  }; 

  return (
    <div className="search-form-container">
      <h2 className="search-form-title">Find Your Books</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label className="form-label">University</label>
          <select
            className="form-input"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          >
            <option value="">Select University</option>
            {formdatahero.universities.map((uni, index) => (
              <option key={index} value={uni}>
                {uni}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Semester</label>
          <select
            className="form-input"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            {formdatahero.semesters.map((sem, index) => (
              <option key={index} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Course</label>
          <select
            className="form-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {formdatahero.courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-input"
            placeholder="Enter Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Faculty</label>
          <select
            className="form-input"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          >
            <option value="">Select Faculty</option>
            {formdatahero.faculties.map((faculty, index) => (
              <option key={index} value={faculty}>
                {faculty}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Degree Program</label>
          <select
            className="form-input"
            value={degreeProgram}
            onChange={(e) => setDegreeProgram(e.target.value)}
          >
            <option value="">Select Degree Program</option>
            {formdatahero.degreePrograms.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </select>
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
