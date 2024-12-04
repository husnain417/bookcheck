import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import Breadcrumbs from "../breadcrumbs";
import Contact from "../contact";
import '../../assets/css/faq.css'
import Contactv2 from "../contactv2";

const Contactmain = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
     <Header header={header} />
      <Breadcrumbs isBg="yes" title="Contact" />
      <Contact />
      <Footer  isBg="" menu={menu} />
    </>
  );
}

export default Contactmain;
