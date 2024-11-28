import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import Product from "../product";

const Products1 = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
     <Header header={header} />
     <Product />
      <Footer  isBg="" menu={menu} />
    </>
  );
}

export default Products1;
