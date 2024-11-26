import React from "react";
import Aboutv6 from "../aboutv6";
import Achievement from "../achievement";
import Blog from "../blog";
import Booksv1 from "../booksv1";
import Booksv2 from "../booksv2";
import Contact from "../contact";
import Cta from "../cta";
import Ctav5 from "../ctav5";
import Event from "../event";
import FunFacts from "../fun-facts";
import Footer from "../global/footer";
import Header from "../global/header";
import Herov6 from "../herov6";
import Testimonial from "../testimonial";
import Gallery from "../gallery";

const Version06 = ({ headerv2, footer }) => {
  const { menuv2 } = footer;

  return (
    <>
      <Header header={headerv2} />
      <Herov6 isBg="yes"/>
      <Aboutv6 isBg=""/>
      <Booksv1 isBg="yes"/>
      <FunFacts isBg=""/>
      <Achievement isBg="yes"/>
      <Gallery isBg="" />
      <Cta isBg=""/>
      <Event isBg="yes"/>
      <Booksv2 isBg=""/>
      <Testimonial isBg="yes"/>
      <Blog isBg=""/>
      <Ctav5 />
      <Contact isBg=""/>
      <Footer isBg="yes" menu={menuv2} />
    </>
  );
};

export default Version06;
