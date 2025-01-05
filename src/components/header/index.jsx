import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// App Header
const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(prevState => !prevState);
  };

  const handleSubMenuClick = () => {
    setIsSubMenuActive(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setScrolledDown(true);
          setScrolled(false);
        } else {
          // Scrolling up
          setScrolled(true);
        }
      } else {
        // Less than threshold
        setScrolledDown(false);
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the effect by removing the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuActive) {
      document.body.classList.add('menu--open');
    } else {
      document.body.classList.remove('menu--open');
    }
  }, [isMenuActive]);

  useEffect(() => {
    if (isSubMenuActive) {
      document.body.classList.add('submenu--open');
    } else {
      document.body.classList.remove('submenu--open');
    }
  }, [isSubMenuActive]);

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''} ${scrolledDown ? 'scrolled-down' : ''}`}>
      <div className="app-header-top">
        <div className="container-full">
          <div className="app-header-top-wrapper">
            <ul className="d-flex">
              <li><a href="https://www.instagram.com/adarsh_.sharma._/?igsh=MW5nMmJ4aHl2MGF1OQ%3D%3D&utm_source=qr"><i className="bi bi-instagram"></i></a></li>
              <li><a href="https://gitlab.com/ada70351"><i className="bi bi-github"></i></a></li>
              <li><a href="/"><i className="bi bi-linkedin"></i></a></li>
            </ul>
            <ul className="d-flex">
              <li><a href="https://api.whatsapp.com/send?phone=9044477693"><i className="bi bi-whatsapp"></i></a></li>
              <li><a href="tel:+91-9044477693"><i className="bi bi-telephone-fill"></i></a></li>
              <li><a href="mailto:ada70351@gmail.com"><i className="bi bi-envelope-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="app-header-main">
        <div className="container-full">
          <div className="app-header-main-teaser">
            <div className="app-header-main-teaser__wrapper">
              <Link to="/" className="brand-logo">
                <svg fill="none" viewBox="0 0 160 46" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="a" cx="1.42%" cy="4.44%" r="93.21%" fx="1.42%" fy="4.44%">
                      <stop offset="0%" stopColor="#00c4cc" />
                      <stop offset="52.5%" stopColor="#5a32fa" />
                      <stop offset="100%" stopColor="#7d2ae8" />
                    </radialGradient>
                  </defs>
                  <rect width="45" height="45" fill="url(#a)" rx="22.5" />
                  <path fill="#fff" d="M21.978 10.123c0-.001-.001-.001 0 0L10.675 33.98h4.844l9.147-18.474-2.688-5.383zM27 19.988l-4.665 9.688-.09.18h4.575l1.794 4.127h5.202L27 19.988z" />
                  <text x="50" y="35" fill="url(#a)" fontFamily="Dancing Script" fontSize="32" fontWeight="700">
                    Adarsh
                  </text>
                </svg>
              </Link>
              <nav className={`navigation ${isMenuActive ? 'is-open' : ''}`.trim()}>
                <ul className='navigation-list'>
                  <li className="navigation-list__item">
                    <Link to="/" className="menu-link"><i className="bi bi-house-fill"></i><span className='align-baseline ps-2 ps-lg-1'>Home</span></Link>
                  </li>
                  <li className="navigation-list__item is-mega-menu">
                    <button className='menu-link' onClick={handleSubMenuClick}>
                      <div className="menu-link__wrapper">
                        <span className='align-baseline ps-2 ps-lg-1'>Elements</span>
                      </div>
                      <i className="bi bi-chevron-down"></i></button>
                    <ul className={`dropdown-megamenu ${isSubMenuActive ? 'submenu-is-open' : ''}`.trim()}>
                      <li>
                        <div className="dropdown-megamenu__content">
                          <div className="row">
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 1</span>
                              <ul className="mega-submenu">
                                <li><Link to="/accordion" className='mega-submenu__link'><i className="bi bi-view-list"></i><span className='align-baseline ps-2'>Accordion</span></Link></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-exclamation-octagon-fill"></i><span className='align-baseline ps-2'>Alert</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-bootstrap-fill"></i><span className='align-baseline ps-2'>Buttons</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-chat-square-quote-fill"></i><span className='align-baseline ps-2'>Blockquotes</span></a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 2</span>
                              <ul className='mega-submenu'>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-credit-card-2-front-fill"></i><span className='align-baseline ps-2'>Cards</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-arrow-up-square-fill"></i><span className='align-baseline ps-2'>Call To Action</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-sort-numeric-up"></i><span className='align-baseline ps-2'>Counter</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-box-seam-fill"></i><span className='align-baseline ps-2'>Icon Box</span></a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 3</span>
                              <ul className='mega-submenu'>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-list-task"></i><span className='align-baseline ps-2'>Lists</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-images"></i><span className='align-baseline ps-2'>Image Gallery</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-file-image-fill"></i><span className='align-baseline ps-2'>Image Frame</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-bounding-box"></i><span className='align-baseline ps-2'>Modal</span></a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 4</span>
                              <ul className='mega-submenu'>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-card-image"></i><span className='align-baseline ps-2'>Parallax</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-collection-play-fill"></i><span className='align-baseline ps-2'>Media</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-bar-chart-steps"></i><span className='align-baseline ps-2'>Progress Bar</span></a></li>
                                <li><a href="/" className='mega-submenu__link'><i className="bi bi-file-earmark-richtext-fill"></i> <span className='align-baseline ps-2'>Image & Text</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="navigation-list__item">
                    <Link to="/about" className="menu-link"><span className='align-baseline ps-2 ps-lg-1'>About</span></Link>
                  </li>
                  <li className="navigation-list__item">
                    <a href="/" className="menu-link"><span className='align-baseline ps-2 ps-lg-1'>Blog</span></a>
                  </li>
                  <li className="navigation-list__item">
                    <Link to="/typography" className="menu-link"><span className='align-baseline ps-2 ps-lg-1'>Typography</span></Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="app-header-button">
              <button src="/" className="button button--outline">Hire Me <i className="bi bi-download"></i></button>
              <div className={`menu-trigger-btn ${isMenuActive ? 'is-open' : ''}`.trim()} onClick={handleMenuClick}>
                <div className='bar' />
                <div className='bar' />
                <div className='bar' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
