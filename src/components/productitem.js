import React, { useEffect, useState,useContext  } from 'react';
import GLightbox from 'glightbox';
import { CartContext } from '../components/CartContext';

const Productitem = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  // const addToCart = (book) => {
  //   setCartItems((prevItems) => {
  //     const existingItem = prevItems.find((item) => item.id === book.id);
  //     if (existingItem) {
  //       return prevItems.map((item) =>
  //         item.id === book.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }
  //     return [...prevItems, { ...book, quantity: 1 }];
  //   });

  //   alert(`${book.title} added to cart!`);
  // };

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox-book",
      slideEffect: "zoom",
      mobileConfig: {
        width: '100%',
        height: '100%',
        touchNavigation: true,
      },
      // Add this callback to prevent event propagation
      onOpen: (instance, targetElement) => {
        if (targetElement) {
          const addToCartButtons = targetElement.querySelectorAll('.btn-add-to-cart');
          addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
              e.stopPropagation(); 
            });
          });
        }
        }
    });
  
    return () => lightbox.destroy(); // Cleanup old instance
  }, [products]);
  
  return (
    <div className="container">
      <div className="row .row2">
        {products.map((book, i) => (
          <div key={book.id} className="bookitem">
            <div className="book-slide-container cont">
              <div className="book-image-wrapper wrap">
                <a
                  href={book.image}
                  className="glightbox-book"
                  data-glightbox={`description: .book-desc${i}; descPosition: right;`}
                >
                  <img
                    className="img-fluid book-image"
                    src={book.image}
                    alt={book.title}
                  />
                </a>
              </div>
              <div className="book-details text-center">
                <h4 className="book-title mt-2">{book.title}</h4>
                <p className="book-price">
                  ${(book.price * (1 - book.discount / 100)).toFixed(2)}
                  <span className="original-price ml-2">
                    <del>${book.price.toFixed(2)}</del>
                  </span>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
              <div className={`glightbox-desc book-desc${i}`}>
                      <h3 className="mb-4 text-center">{book.title}</h3>
                      <p><strong>Course:</strong> {book.course}</p>
                      <p><strong>Author:</strong> {book.author}</p>
                      <p><strong>Description:</strong> {book.description}</p>
                      <div className="book-pricing mb-3">
                        <p>
                          <strong>Original Price:</strong> ${book.price.toFixed(2)}
                        </p>
                        <p>
                          <strong>Discount:</strong> {book.discount}%
                        </p>
                        <p>
                          <strong>Discounted Price:</strong> ${(book.price * (1 - book.discount / 100)).toFixed(2)}
                        </p>
                      </div>
                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productitem;
