import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import Breadcrumbs from "../breadcrumbs";
import faqData from '../../data/faq.json'  
import Faqitem from "../faqitem";
import '../../assets/css/faq.css'

const Faq = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
     <Header header={header} />
     <Breadcrumbs isBg="yes" title="FAQs" />
     <Faqitem faqData={faqData}/>
      <Footer  isBg="" menu={menu} />
    </>
  );
}

export default Faq;
