
import React from "react";

import Header from "../global/header";
import Footer from "../global/footer";
import Breadcrumbs from "../breadcrumbs";
import SingleBlogs from "../single-blogs";

const SingleBlog = ({ headerv3, footer}) => {
  const { menuv3 } = footer;

  return (
    <>
      <Header header={headerv3} />
      <Breadcrumbs isBg="yes" title="Single Blog" />
      <SingleBlogs isBg=""/>
      <Footer isBg="yes" menu={menuv3} />
    </>
  );
};

export default SingleBlog;
