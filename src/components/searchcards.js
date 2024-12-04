import React,{useContext} from "react";
import "../assets/css/search.css";
import bookdata from '../data/products.json';
import { CartContext } from '../components/CartContext';

const Searchcards = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const validValues = data ? Object.values(data).filter((value) => value) : [];
  const books = bookdata.books;

  return (
    <div className="info">
      {/* Heading for search results */}
      <h5 className="info-title">
        {validValues.length > 0 ? (
          <>
            <span className="info-label">Results for:</span>
            <span className="info-query"> "{validValues.join(", ")}"</span>
          </>
        ) : (
          "All Available Books"
        )}
      </h5>

      {books.map((book) => (
        <div key={book.id} className="card-container">
          <div className="card-left">
            <div className="image-placeholder">
              <img
                src={book.image}
                alt={book.title}
              />
            </div>
          </div>
          <div className="card-right">
            <h4 className="product-title">{book.title}</h4>
            <p className="product-description">{book.description}</p>
            <div className="book-info">
              <p className="author">Author: {book.author}</p>
              <p className="book">Course: {book.course}</p>
            </div>
            <p className="product-isbn">Category: {book.category}</p>
            <p className="product-price">
              <span className="original-price">${book.price.toFixed(2)}</span>{" "}
              <span className="discounted-price">
                ${(book.price * (1 - book.discount / 100)).toFixed(2)}
              </span>
            </p>
            <button className="button btn1"  onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Searchcards;