import { default as React, useState } from "react";
import { Navbar } from "react-bootstrap";
import { GoChevronDown } from "react-icons/go";
import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";
import { siteLogo } from "../../global";
import logo from '../../assets/Logo Kit/1x/Asset 2.png';
import '../../assets/css/header.css'

const Header = ({ header }) => {
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
                {header.menu?.map((data, i) =>
                  data?.isDropdown === true ? (
                    <li className="nav-item dropdown submenu" key={i}>
                      <Link
                        activeClass="active"
                        className="nav-link scroll dropdown-toggle"
                        to={`${data.link}`}
                        spy={true}
                        isDynamic={false}
                        hashSpy={false}
                        spyThrottle={500}
                        smooth={true}
                        duration={500}
                        offset={-60}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {data.title}
                        <span
                          onClick={handleToggle}
                          className="sub-menu-toggle"
                        >
                          <GoChevronDown />
                        </span>
                      </Link>
                      <ul
                        className={
                          isActive ? "dropdown-menu show" : "dropdown-menu"
                        }
                      >
                        {data.dropdownItem.map((item, i) => (
                          <li key={i} className="nav-item">
                            <PageLink to={item.link} className="nav-link">
                              {item.title}
                            </PageLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item" key={i}>
                      <Link
                        activeClass="active"
                        className="benefits nav-link"
                        to={`${data.link}`}
                        spy={true}
                        isDynamic={false}
                        hashSpy={false}
                        spyThrottle={500}
                        smooth={true}
                        duration={500}
                        offset={-60}
                      >
                        {data.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
