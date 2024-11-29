import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import Version02 from "./components/pages/version-02";
import Version03 from "./components/pages/version-03";
import Version04 from "./components/pages/version-04";
import Version05 from "./components/pages/version-05";
import Version06 from "./components/pages/version-06";
import Search from "./components/pages/search";
import Productmain from "./components/pages/productmain";

import AOS from "aos";
import { useEffect } from "react";
import "./assets/css/aos.css";
import AllBlog from "./components/pages/all-blog";
import AllEvent from "./components/pages/all-event";
import BlogLeftSidebar from "./components/pages/blog-left-sidebar";
import BlogRightSidebar from "./components/pages/blog-right-sidebar";
import SingleBlog from "./components/pages/single-blog";
import SingleEvent from "./components/pages/single-event";
import footerData from "./data/footer.json";
import headerData from "./data/header.json";
import Products1 from "./components/pages/products1";

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  rel="stylesheet"
/>

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  const { header, headerv2, headerv3 } = headerData;
  const { footer } = footerData;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Version01 header={header} footer={footer} />} />
          <Route path="v1" element={<Version01 header={header} footer={footer} />} />
          <Route path="v2" element={<Version02 header={header} footer={footer} />} />
          <Route path="v3" element={<Version03 header={header} footer={footer} />} />
          <Route path="v4" element={<Version04 headerv2={headerv2} footer={footer} />} />
          <Route path="v5" element={<Version05 headerv2={headerv2} footer={footer} />} />
          <Route path="v6" element={<Version06 headerv2={headerv2} footer={footer} />} />
          <Route path="/products" element={<Productmain header={header} footer={footer} />} />
          <Route path="/product1" element={<Products1 header={header} footer={footer} />} />
          <Route path="/search" element={<Search header={header} footer={footer} />} />
          <Route
            path="single-blog"
            element={<SingleBlog headerv3={headerv3} footer={footer} />}
          />
          <Route path="all-blog" element={<AllBlog headerv3={headerv3} footer={footer} />} />
          <Route
            path="single-event"
            element={<SingleEvent headerv3={headerv3} footer={footer} />}
          />
          <Route path="all-event" element={<AllEvent headerv3={headerv3} footer={footer} />} />
          <Route
            path="blog-right-sidebar"
            element={<BlogRightSidebar headerv3={headerv3} footer={footer} />}
          />
          <Route
            path="blog-left-sidebar"
            element={<BlogLeftSidebar headerv3={headerv3} footer={footer} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
