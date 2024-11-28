import { default as React, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link as PageLink, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";
import { siteLogo } from "../../global";
import logo from "../../assets/Logo Kit/1x/Asset 2.png";
import "../../assets/css/header.css";


const Header = ({ header }) => {
  const [fix, setFix] = useState(false);
  const navigate = useNavigate();

  // Toggle fixed navbar on scroll
  function setFixed() {
    setFix(window.scrollY >= 100);
  }
  window.addEventListener("scroll", setFixed);

  const handleCrossPageScroll = (link) => {
    const [path, hash] = link.split("#");
    if (window.location.pathname !== path) {
      // Navigate to the target page first
      navigate(path, { replace: false });
    }
    // Scroll to the target section after navigation
    setTimeout(() => {
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
        offset: -60,
      });
    }, 100); // Allow time for navigation
  };

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <Navbar bg="none" expand="lg">
          <a className="navbar-brand" href="/">
            <img src={logo} alt={siteLogo.alt} />
          </a>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <ul className="navbar-nav menu ms-lg-auto">
              {header.menu?.map((data, i) => (
                <li className="nav-item" key={i}>
                {data.link.startsWith("/#") ? (
                  // Same-page navigation with hover and underline effects
                  <Link
                    className="nav-link"
                    onClick={() => handleCrossPageScroll(data.link)}
                  >
                    {data.title}
                  </Link>
                ) : (
                  // Different page navigation using react-router-dom
                  <PageLink to={data.link} className="nav-link">
                    {data.title}
                  </PageLink>
                )}
                </li>
              ))}
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
