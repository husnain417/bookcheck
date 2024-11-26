
import React from "react";

import Header from "../global/header";
import Footer from "../global/footer";
import Breadcrumbs from "../breadcrumbs";
import AllEvents from "../all-events";

const AllEvent = ({ headerv3, footer}) => {
  const { menuv3 } = footer;

  return (
    <>
      <Header header={headerv3} />
      <Breadcrumbs isBg="yes" title="All Event" />
      <AllEvents isBg=""/>
      <Footer isBg="yes" menu={menuv3} />
    </>
  );
};

export default AllEvent;
