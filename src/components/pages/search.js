import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import AdvancedSearch from "../advancedsearch";
import "../../assets/css/search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBookOpen, faBarcode } from '@fortawesome/free-solid-svg-icons';

const Search = ({ header, footer }) => {
  const { menu } = footer;

  return (
    <>
      <Header header={header} />
      <div className="productmain">
        <div className="productmain-cont">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
              <div className="section-title-center text-center">
                <span>Books</span>
                <h2 className="display-6">Search</h2>
                <div className="section-divider divider-traingle"></div>
              </div>
            </div>
          </div>
          <p>
            Find new and used textbooks for your college courses with ease. Browse thousands of options, from academic journals to classic literature, tailored for students and professionals. Use the ISBN feature to pinpoint the exact edition you need.
          </p>
        </div>
        <AdvancedSearch />
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
        <div className="content-foot">
          <p>
            At BookCheck, you'll find a diverse selection of both new and used textbooks designed for students across various courses, semesters, and universities. Whether you're an undergraduate, graduate, postgraduate, or faculty member, we cater to all academic needs with essential course materials and specialized texts.
            <br />
            <br />
            We proudly offer books from renowned publishers like McGraw Hill and Pearson, ensuring access to trusted resources. For those seeking affordability, our collection includes used copies and older editions often priced competitively, making quality education accessible for every budget.
            <br />
            <br />
            Our extensive range covers subjects such as history, sciences, engineering, computer science, mathematics, business, fine arts, humanities, and social sciences. We also provide international editions for additional savings, allowing you to get the content you need without compromise.
            <br />
            <br />
            With our ISBN search feature, finding the exact edition of a book has never been easier. And if you’re unsure of the ISBN, your course tutor can guide you. From exam preparation to deep-dives into new topics, BookCheck is your trusted partner in education.
          </p>
        </div>
      </div>
      <Footer isBg="" menu={menu} />
    </>
  );
};

export default Search;
