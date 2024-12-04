import React, { useState } from "react";
import '../assets/css/faq.css';

const Faqitem = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion custom-accordion">
      {faqData.map((item, index) => (
        <div
          className="accordion-item mb-3 wow fadeInUp"
          data-wow-delay={`${0.3 + index * 0.2}s`}
          key={item.id}
        >
          <h5 className="accordion-header">
            <button
              className={`accordion-button ${
                index === activeIndex ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={index === activeIndex}
              aria-controls={item.id}
            >
              {item.question}
            </button>
          </h5>
          <div
            id={item.id}
            className={`accordion-collapse collapse ${
              index === activeIndex ? "show" : ""
            }`}
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqitem;
