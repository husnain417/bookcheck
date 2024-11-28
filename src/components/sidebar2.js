import React, { useState } from 'react';
import '../assets/css/sidebar.css';

const Sidebar2 = () => {
  // State for each dropdown
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [university, setUniversity] = useState('');
  const [price, setPrice] = useState('');

  // Example options
  const courses = [
    'Engineering',
    'Computer Science',
    'Medical Sciences',
    'Business Management',
    'Environmental Science',
  ];

  const universities = [
    'Harvard University',
    'Stanford University',
    'MIT',
    'Oxford University',
    'Cambridge University',
  ];

  return (
    <div className="sidebar2">
      <h2>Filters</h2>
      <div className="filter2">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select</option>
          <option value="new">New Books</option>
          <option value="used">Used Books</option>
        </select>
      </div>

      <div className="filter2">
        <label htmlFor="course">Courses:</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div className="filter2">
        <label htmlFor="semester">Semester:</label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">Select</option>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>

      <div className="filter2">
        <label htmlFor="university">University:</label>
        <select
          id="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        >
          <option value="">Select</option>
          {universities.map((uni, index) => (
            <option key={index} value={uni}>
              {uni}
            </option>
          ))}
        </select>
      </div>

      <div className="filter2">
        <label htmlFor="price">Price:</label>
        <select
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Select</option>
          <option value="high-to-low">High to Low</option>
          <option value="low-to-high">Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar2;
