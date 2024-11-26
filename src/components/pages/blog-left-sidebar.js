import React from "react";
import BlogLeftSidebars from "../blog-left-sidebars";
import Breadcrumbs from "../breadcrumbs";
import Footer from "../global/footer";
import Header from "../global/header";

const BlogLeftSidebar = ({ headerv3, footer }) => {
  const { menuv3 } = footer;
  return (
    <>
      <Header header={headerv3} />
      <Breadcrumbs isBg="yes" title="Blog left sidebar" />
      <BlogLeftSidebars isBg=""/>
      <Footer isBg="yes" menu={menuv3} />
    </>
  );
};

export default BlogLeftSidebar;
