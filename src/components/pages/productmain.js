import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import Categories from "../categories";


const Productmain = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
    <Header header={header} />
    <div className="productmain">
       <div className="productmain-cont">
        <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1" >
            <div className="section-title-center text-center">
              <span 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600">
                  Books
                  </span>
              <h2 className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650">
                  Textbooks
                  </h2>
              <div className="section-divider divider-traingle" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650"></div>
            </div>
        </div>
        </div>
        <p data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700">Explore our wide collection of textbooks, including reference books, study guides, key texts, academic journals, test prep materials, and classic literature. Whether you're delving into biology, calculus, or law, we offer affordable options for students and academics alike. Ensure you get the right edition by searching with the book’s ISBN.</p>
      </div>
      <Categories isBg=""/>
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
    <Footer  isBg="" menu={menu} />
    </>
  )
}

export default Productmain
