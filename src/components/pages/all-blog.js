import React from "react";
import Header from "../global/header";
import Footer from "../global/footer";
import Breadcrumbs from "../breadcrumbs";
import AllBlogs from "../all-blogs";

const AllBlog = ({ headerv3, footer }) => {
  const { menu } = footer;


  return (
    <>
      <Header header={headerv3} />
      <Breadcrumbs isBg="yes" title="All blog" />
      <AllBlogs isBg="" />
      <Footer isBg="yes" menu={menu} />
    </>
  );
};

export default AllBlog;
