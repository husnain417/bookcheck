import React from 'react'
import '../assets/css/search.css'

const Aboutus = () => {
  return (
    <div className="content-foot">
    <div className="row">
    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
        <div className="section-title-center text-center">
          <span
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
          >About us</span>
          <h2
            className="display-6"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            About us
          </h2>
          <div
            className="section-divider divider-traingle"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="250"
          ></div>
        </div>
      </div>
    </div>
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
  )
}

export default Aboutus
