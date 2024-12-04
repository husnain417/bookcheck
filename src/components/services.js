import React from "react";
import data from "../data/pricing.json";
import '../assets/css/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLock, faHeadset, faTag } from '@fortawesome/free-solid-svg-icons';

const Services = ({ isBg }) => {
  const { features } = data;

  return (
    // <!-- ========== Features section start ========== -->
    <section className="features2"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="600">
      <div className="feature">
        <div className="feature-icon">
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <div className="feature-text">
          <h3>Return & Refund</h3>
          <p>Money back guarantee</p>
        </div>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="feature-text">
          <h3>Secure Payment</h3>
          <p>30% off by subscribing</p>
        </div>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <FontAwesomeIcon icon={faHeadset} />
        </div>
        <div className="feature-text">
          <h3>Quality Support</h3>
          <p>Always online 24/7</p>
        </div>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <FontAwesomeIcon icon={faTag} />
        </div>
        <div className="feature-text">
          <h3>Daily Offers</h3>
          <p>20% off by subscribing</p>
        </div>
      </div>
    </section>
    // <!-- ========== Features section end ========== -->
  );
};

export default Services;
