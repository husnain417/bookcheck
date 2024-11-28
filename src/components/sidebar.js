import React, { useState } from 'react';
import '../assets/css/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ 
  courses, 
  categories, 
  sortOptions, 
  universities, 
  onFilterChange 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    triggerFilterChange({ category: e.target.value });
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    triggerFilterChange({ sort: e.target.value });
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    triggerFilterChange({ course: e.target.value });
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    triggerFilterChange({ semester: e.target.value });
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
    triggerFilterChange({ university: e.target.value });
  };

  const triggerFilterChange = (newFilters) => {
    onFilterChange({
      category: selectedCategory,
      sort: selectedSort,
      course: selectedCourse,
      semester: selectedSemester,
      university: selectedUniversity,
      ...newFilters,
    });
  };

  return (
    <div className="filters-section">
      <div className="filter-group">
        {/* Category Filter */}
        <div className="filter">
          <label htmlFor="category">Category</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Sort */}
        <div className="filter">
          <label htmlFor="sort">Price</label>
          <select id="sort" value={selectedSort} onChange={handleSortChange}>
            <option value="">Select Sort</option>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Course Filter */}
        <div className="filter">
          <label htmlFor="course">Course</label>
          <select id="course" value={selectedCourse} onChange={handleCourseChange}>
            <option value="">All Courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Semester Filter */}
        <div className="filter">
          <label htmlFor="semester">Semester</label>
          <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
            <option value="">All Semesters</option>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((semester) => (
              <option key={semester} value={semester}>
                Semester {semester}
              </option>
            ))}
          </select>
        </div>

        {/* University Filter */}
        <div className="filter">
          <label htmlFor="university">University</label>
          <select id="university" value={selectedUniversity} onChange={handleUniversityChange}>
            <option value="">All Universities</option>
            {universities.map((university) => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
