import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";
import { GoChevronDown } from "react-icons/go";
import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";
import { siteLogo } from "../../global";
import logo from '../../assets/Logo Kit/1x/Asset 2.png';
import { scroller } from "react-scroll";
import '../../assets/css/header.css';

const Header = ({ header }) => {
  const navigate = useNavigate();

  const [isActive, setActive] = useState(false);
  const [fix, setFix] = useState(false);

  const handleToggle = () => setActive(!isActive);

  function setFixed() {
    setFix(window.scrollY >= 100);
  }
  window.addEventListener("scroll", setFixed);

  const handleCrossPageScroll = (link) => {
    const [path, hash] = link.split("#");
    if (window.location.pathname !== path) {
      navigate(path, { replace: false });
    }
    setTimeout(() => {
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
        offset: -60,
      });
    }, 100);
  };

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="none" expand="lg">
            <a className="navbar-brand" href="/">
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
                    {data.submenu ? (
                      <NavDropdown
                        title={
                          <span className="nav-link drop">
                            {data.title} <GoChevronDown />
                          </span>
                        }
                        id={`nav-dropdown-${i}`}
                        className="nav-item"
                      >
                        {data.submenu.map((sub, j) => (
                          <NavDropdown.Item
                            key={j}
                            onClick={() =>
                              sub.link.startsWith("/#")
                                ? handleCrossPageScroll(sub.link)
                                : navigate(sub.link)
                            }
                          >
                            {sub.title}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    ) : data.link.startsWith("/#") ? (
                      <Link
                        className="nav-link"
                        onClick={() => handleCrossPageScroll(data.link)}
                      >
                        {data.title}
                      </Link>
                    ) : (
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
