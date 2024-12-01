import React from "react";
import Footer from "../global/footer";
import Header from "../global/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBookOpen, faBarcode } from '@fortawesome/free-solid-svg-icons';
import Cartcheckout from "../cartcheckout";

const Cart = ({ header, footer }) => {
  const { menu } = footer;

  return (
    <>
      <Header header={header} />
      <Cartcheckout />
      <Footer isBg="" menu={menu} />
    </>
  );
};

export default Cart;
