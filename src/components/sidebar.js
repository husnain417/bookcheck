import React, { useState } from 'react';
import '../assets/css/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ courses, categories, sortOptions, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange(e.target.value, selectedSort);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    onFilterChange(selectedCategory, e.target.value);
  };

  return (
    <div className="filters-section">
      <div className="filter-group">
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
        <div className="filter">
          <label htmlFor="course">Course</label>
          <select id="course" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="search-bar">
        <input placeholder="Enter title, author or course" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
