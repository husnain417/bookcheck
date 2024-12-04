import React, { useState } from 'react';
import formdatahero from '../data/formdatahero.json';
import '../assets/css/hero.css';

function CourseSearchForm() {
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [university, setUniversity] = useState('');
  const [year, setYear] = useState('');
  const [faculty, setFaculty] = useState('');
  const [degreeProgram, setDegreeProgram] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure at least one field is filled
    if (!course && !semester && !university && !year && !faculty && !degreeProgram) {
      setError('Please fill in at least one field.');
      return;
    }

    // If valid, log the data and clear the error
    setError('');
    console.log({ course, semester, university, year, faculty, degreeProgram });
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

export default CourseSearchForm;
