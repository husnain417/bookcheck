import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBookOpen, faBarcode } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/search.css";

const Searchcards = () => {
  return (
        <div className="info">
        <div className="info-item">
          <FontAwesomeIcon icon={faGlobe} className="info-icon" />
          <h4>International Editions</h4>
          <p>
            Looking for cheap textbooks? Consider international editions - textbooks that have been published outside the US.
            These books are usually significantly cheaper than textbooks published in the US.
          </p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faBookOpen} className="info-icon" />
          <h4>Used Books vs. New Books</h4>
          <p>
            Wondering whether to buy a used book or a new one? Used books are often more affordable and environmentally friendly,
            while new books come in pristine condition with no prior markings. Choose based on your preference and budget.
          </p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faBarcode} className="info-icon" />
          <h4>What is an ISBN?</h4>
          <p>
            ISBNs are useful when looking for specific books such as the latest edition of a book on your reading list.
            It stands for International Standard Book Number. This 10 or 13-digit number identifies the edition.
          </p>
        </div>
      </div>
      )
}

export default Searchcards;
