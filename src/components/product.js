import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Productitem from './productitem';
import Sidebar2 from './sidebar2';
import booksData from '../data/products.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/products.css';

const Product = () => {
  const categories = ['New Books', 'Second-Hand Books'];
  const courses = [
    'Engineering',
    'Computer Science',
    'Medical Sciences',
    'Business Management',
    'Environmental Science',
  ];
  const sortOptions = ['Low to High', 'High to Low'];
    const universities = [
    'Harvard University',
    'Stanford University',
    'MIT',
    'Oxford University',
    'Cambridge University',
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    setFilteredProducts(booksData.books);
  }, []);

  const handleFilterChange = (category, sortBy) => {
    let filtered = booksData.books;

    if (category) {
      filtered = filtered.filter((product) => product.course === category);
    }

    if (sortBy) {
      filtered = filtered.sort((a, b) =>
        sortBy === 'Low to High' ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Calculate the range of books to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="products-page">
      <Sidebar2/>
      <Sidebar
        courses={courses}
        categories={categories}
        sortOptions={sortOptions}
        universities = {universities}
        onFilterChange={handleFilterChange}
      />
      <div className='body'>
      <div className="section-title-center text-center">
        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search title, author, course or university" 
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="products-list">
        <Productitem products={currentProducts} />
      </div>
      <div className="pagination-controls text-center mt-4">
          <button
            className="btn btn-secondary btn-sm mr-3"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary btn-sm ml-3"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default Product;
