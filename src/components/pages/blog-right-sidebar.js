import React from "react";
import Header from "../global/header";
import Footer from "../global/footer";
import Breadcrumbs from "../breadcrumbs";
import BlogRightSidebars from "../blog-right-sidebars";

const BlogRightSidebar = ({ headerv3, footer }) => {
  const { menuv3 } = footer;

  return (
    <>
      <Header header={headerv3} />
      <Breadcrumbs isBg="yes" title="Blog right sidebar" />
      <BlogRightSidebars isBg="" />
      <Footer isBg="yes" menu={menuv3} />
    </>
  );
};

export default BlogRightSidebar;
