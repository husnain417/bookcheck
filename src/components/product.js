import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Productitem from './productitem';
import booksData from '../data/products.json';
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
      <Sidebar
        courses={courses}
        categories={categories}
        sortOptions={sortOptions}
        onFilterChange={handleFilterChange}
      />
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
          <div className="section-title-center text-center">
            <h2 className="display-6">BOOKS</h2>
          </div>
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
  );
};

export default Product;
