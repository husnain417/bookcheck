import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../assets/css/cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cartcheckout = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleIncreaseQuantity = (item) => { 
    addToCart({
      ...item, 
      quantity: 1 
    }); 
  }; 

  const handleDecreaseQuantity = (item) => { 
    if (item.quantity > 1) { 
      addToCart({
        ...item, 
        quantity: -1  // Subtract 1 from the existing quantity
      }); 
    } else {
      removeFromCart(item.id);
    }
  }; 
  
  const handleRemoveItem = (id) => {
    removeFromCart(id); // Remove item from the cart
  };

  // Calculate total items and total cost
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * (1 - item.discount / 100) * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-main">
      <div className="cart">
        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
          <div className="section-title-center text-center">
            <span>
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ marginRight: '10px', fontSize: '30px', color: '#EB511A' }}
              />
              Cart & Checkout
            </span>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className='ul-cart'>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <div className='img-cart'>
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>Price: ${(item.price * (1 - item.discount / 100)).toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecreaseQuantity(item)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="checkout-summary">
        <div className="total-items">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="total-cost">
          <span>Total Cost:</span>
          <span>${totalCost}</span>
        </div>
        <div className="checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cartcheckout;
