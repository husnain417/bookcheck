import React from "react";
import Achieve from "../achieve";
import Achievement from "../achievement";
import AuthorV2 from "../authorv2";
import Booksv2 from "../booksv2";
import Chapter from "../chapter";
import ChapterPreview from "../chapter-preview";
import Contact from "../contact";
import Ctav4 from "../ctav4";
import Ctav5 from "../ctav5";
import AllBlogs from "../all-blogs"
import FunFacts from "../fun-facts";
import Footer from "../global/footer";
import Header from "../global/header";
import Hero from "../hero";
import Pricing from "../pricing";
import Testimonial from "../testimonial";
import Gallery from "../gallery";
import Cta from "../cta";
import Services from "../services"
import Searchcards from "../searchcards";
import Aboutus from "../aboutus";

const Version01 = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
     <Header header={header} />
      <Hero isBg="yes" />
      {/* <Achieve isBg="" />
      <Chapter isBg="yes" /> */}
      <Pricing isBg="" />
      <ChapterPreview isBg="yes" />
      <Searchcards />
      <Gallery isBg="" />
      <Services isBg="" />
      <Aboutus />
      <Cta isBg="yes" />
      {/* <AuthorV2 isBg="" />
      <Achievement isBg="yes" />
      <FunFacts isBg=""/>
      <Booksv2 isBg="yes" />
      <Ctav5 isBg=""/> */}
       <AllBlogs isBg=""/> 
      <Testimonial isBg="yes" />
      {/* <Ctav4 isBg="" /> */}
      <Contact isBg="" />
      <Footer  isBg="yes" menu={menu} />
    </>
  );
}

export default Version01;
