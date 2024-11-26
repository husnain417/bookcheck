import React from "react";
import Achievement from "../achievement";
import Authorv4 from "../authorv4";
import Booksv2 from "../booksv2";
import Ctav5 from "../ctav5";
import FunFacts from "../fun-facts";
import Herov4 from "../herov4";
import Testimonial from "../testimonial";
import Eventv2 from "../eventv2";
import Booksv3 from "../booksv3";
import Blog from "../blog";
import Ctav4 from "../ctav4";
import Contactv2 from "../contactv2";
import Cta from "../cta";
import Header from "../global/header";
import Footer from "../global/footer";
import Gallery from "../gallery";

const Version04 = ({headerv2, footer}) => {
  const {menuv2} = footer;
  return (
    <>
      <Header header={headerv2} />
      <Herov4 isBg="yes" />
      <Authorv4 isBg=""/>
      <FunFacts isBg="yes"/>
      <Booksv2 isBg=""/>
      <Achievement isBg="yes"/>
      <Gallery isBg="" />
      <Ctav5 isBg=""/>
      <Eventv2 isBg="yes"/>
      <Booksv3 isBg=""/>
      <Testimonial isBg="yes"/>
      <Blog isBg=""/>
      <Ctav4 isBg=""/>
      <Contactv2 isBg=""/>
      <Cta isBg="yes"/>
      <Footer isBg="yes" menu={menuv2} />
    </>
  );
};
export default Version04;
