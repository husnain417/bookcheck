import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import AdvancedSearch from "../advancedsearch";

const Search = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
     <Header header={header} />
     <AdvancedSearch />
      <Footer  isBg="" menu={menu} />
    </>
  );
}

export default Search;
