import { default as React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { GoChevronDown } from "react-icons/go";
import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";
import { siteLogo } from "../../global";
import logo from '../../assets/Logo Kit/1x/Asset 2.png';
import { scroller } from "react-scroll";
import '../../assets/css/header.css'

const Header = ({ header }) => {
  const navigate = useNavigate();

  const [isActive, setActive] = useState(false);
  const [fix, setFix] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
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
        <div className="row">
          <Navbar bg="none" expand="lg">
            <a className="navbar-brand" href="/">
              {/* <!-- <h1 className="m-0">BOOKCHECK</h1> --> */}
              <img src={logo} alt={siteLogo.alt} />
            </a>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
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
      </div>
    </header>
  );
};

export default Header;
