import React from "react";
import Breadcrumbs from "../breadcrumbs";
import Footer from "../global/footer";
import Header from "../global/header";
import SingleEvents from "../single-events";

const SingleEvent = ({ headerv3, footer }) => {
  const { menuv3 } = footer;

  return (
    <>
      <Header header={headerv3} />
      <Breadcrumbs isBg="yes" title="Single event" />
      <SingleEvents isBg=""/>
      <Footer isBg="yes" menu={menuv3} />
    </>
  );
};

export default SingleEvent;
