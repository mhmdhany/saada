import InstagramIcon from "../../assets/imgs/instgram-icon.png";
import FacebookIcon from "../../assets/imgs/face-icon.png";
import SnapIcon from "../../assets/imgs/snap-icon.png";
import LanguageIcon from "../../assets/imgs/vector2.png";
import NotificationIcon from "../../assets/imgs/notification-icon.png";
import CartIcon from "../../assets/imgs/cart-icon.png";
import AccountIcon from "../../assets/imgs/account-icon.png";
import SaadaLogo from "../../assets/imgs/saadaLogo.png";

import AOS from "aos";

import "./Navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  const NavbarLinks = [
    {
      id: 1,
      content: "الرئيسية",
    },
    {
      id: 2,
      content: "اعياد ميلاد",
    },
    {
      id: 3,
      content: "ماسبات خاصة",
    },
    {
      id: 4,
      content: "هدايا تخرج",
    },
    {
      id: 5,
      content: "هدايا زواج",
    },
    {
      id: 6,
      content: "مولود جديد",
    },
  ];

  const ContactIcons = [
    {
      id: 1,
      image: InstagramIcon,
    },
    {
      id: 2,
      image: FacebookIcon,
    },
    {
      id: 3,
      image: SnapIcon,
    },
    {
      id: 4,
      image: NotificationIcon,
    },
    {
      id: 5,
      image: CartIcon,
    },
    {
      id: 6,
      image: AccountIcon,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header>
      <div className="navbar-content">
        <div className="container">
          <div className="contact">
            {/* Contact icons */}
            <div className="contact-icons">
              {ContactIcons.slice(0, 3).map((item) => {
                return (
                  <a key={item.id} href="/">
                    <img src={item.image} alt={item.id} />
                  </a>
                );
              })}
            </div>

            <div className="contact-text">
              <a href="/">تواصل معنا</a>
              {/* Border */}
              <span className="custom-border"></span>
              {/* Language Change Button */}
              <a href="/">
                English
                <span>
                  <img src={LanguageIcon} alt="LanguageIcon" />
                </span>
              </a>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="saada-mobile d-block d-lg-none p-4">
              <img src={SaadaLogo} alt="SaadaLogo" />
            </div>
            <button
              className="navbar-toggler me-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* logo in Mobile Screens */}
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Navbar Links */}
              <ul className="navbar-nav">
                {NavbarLinks.slice(0, 3).map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="nav-item mt-3 mt-lg-0 mx-auto mx-md-0">
                      <a
                        className={`nav-link ${
                          item.id === 1 ? "active" : ""
                        } mb-3`}
                        aria-current="page"
                        href="/">
                        {item.content}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="logo m-auto d-none d-lg-block">
                <img src={SaadaLogo} alt="SaadaLogo" />
              </div>
              {/* Navbar Links */}
              <ul className="navbar-nav me-auto mt-3 mt-lg-0">
                {NavbarLinks.slice(3, 6).map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="nav-item mt-3 mt-lg-0 mx-auto mx-md-0">
                      <a className="nav-link" href="/">
                        {item.content}
                      </a>
                    </li>
                  );
                })}

                {/* Footer social icons */}
                <div className="contact-icons mt-3 mt-lg-0 mx-auto mx-md-0">
                  {ContactIcons.slice(3, 6).map((item) => {
                    return (
                      <a key={item.id} href="/">
                        <img src={item.image} alt={item.id} />
                      </a>
                    );
                  })}
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
