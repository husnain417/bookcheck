import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import "../../assets/css/search.css";
import Searchcards from "../searchcards";
import { useLocation } from "react-router-dom";

const Search = ({ header, footer }) => {
  const { menu } = footer;
  const location = useLocation();
  const searchData = location.state; // Data passed via navigate

  return (
    <>
      <Header header={header} />
      <Searchcards data={searchData} />
      <Footer isBg="" menu={menu} />
    </>
  );
};

export default Search;
 