import React from "react";
import Ctav5 from "../ctav5";
import FunFacts from "../fun-facts";
import Testimonial from "../testimonial";
import Eventv2 from "../eventv2";
import Booksv3 from "../booksv3";
import Blog from "../blog";
import Ctav4 from "../ctav4";
import Herov5 from "../herov5";
import AuthorV2 from "../authorv2";
import Booksv1 from "../booksv1";
import Achievementv2 from "../achievementv2";
import Contact from "../contact";
import Header from "../global/header";
import Footer from "../global/footer";

const Version05 = ({ headerv2, footer}) => {
  const {menuv2 } = footer;
  return (
    <>
      <Header header={headerv2} />
      <Herov5 isBg="yes"/>
      <AuthorV2 isBg=""/>
      <Booksv1 isBg="yes"/>
      <FunFacts isBg=""/>
      <Booksv3 isBg="yes"/>
      <Achievementv2 isBg=""/>
      <Eventv2 isBg="yes"/>
      <Testimonial isBg=""/>
      <Ctav5 isBg=""/>
      <Blog isBg=""/>
      <Ctav4 isBg=""/>
      <Contact isBg=""/>
      <Footer isBg="yes" menu={menuv2} />
    </>
  );
};
export default Version05;
