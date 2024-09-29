import React, { useState, useEffect } from 'react';
import Images from '../../Images';

// App Header
function Navbar() {
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
        <div className="container-fluid px-0 px-md-3">
          <div className="app-header-top-wrapper">
            <ul className="d-flex">
              <li><a href="javascript:;"><i class="bi bi-instagram"></i></a></li>
              <li><a href="javascript:;"><i class="bi bi-github"></i></a></li>
              <li><a href="javascript:;"><i class="bi bi-linkedin"></i></a></li>
            </ul>
            <ul className="d-flex">
              <li><a href="https://api.whatsapp.com/send?phone=9044477693"><i class="bi bi-whatsapp"></i></a></li>
              <li><a href="tel:+91-9044477693"><i class="bi bi-telephone-fill"></i></a></li>
              <li><a href="mailto:ada70351@gmail.com"><i class="bi bi-envelope-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="app-header-main">
        <div className="container-fluid py-3 py-lg-0">
          <div className="app-header-main-teaser">
            <div className="app-header-main-teaser__wrapper">
              <div className="brand-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="70" viewBox="0 0 1142 242" fill="none">
                  <path d="M67.4588 98.2663C66.4456 98.2405 65.4291 98.2276 64.3997 98.2276C35.5349 98.2276 0 120.519 0 120.519C0 120.519 35.5349 142.811 64.3997 142.811C65.2936 142.811 66.181 142.801 67.062 142.782C66.3294 143.479 65.6001 144.192 64.8741 144.918C44.4638 165.328 35.0992 206.22 35.0992 206.22C35.0992 206.22 75.9909 196.855 96.4012 176.445C97.0336 175.813 97.6532 175.177 98.2663 174.541C98.2405 175.554 98.2276 176.571 98.2276 177.6C98.2276 206.465 120.519 242 120.519 242C120.519 242 142.811 206.465 142.811 177.6C142.811 176.706 142.801 175.819 142.782 174.938C143.479 175.671 144.192 176.4 144.918 177.126C165.328 197.536 206.22 206.901 206.22 206.901C206.22 206.901 196.855 166.009 176.445 145.599C175.813 144.966 175.177 144.347 174.541 143.734C175.554 143.76 176.571 143.772 177.6 143.772C206.465 143.772 242 121.481 242 121.481C242 121.481 206.465 99.1892 177.6 99.1892C176.706 99.1892 175.819 99.1989 174.938 99.2182C175.671 98.5212 176.4 97.8081 177.126 97.082C197.536 76.6717 206.901 35.7802 206.901 35.7802C206.901 35.7802 166.009 45.1447 145.599 65.555C144.966 66.1874 144.347 66.8232 143.734 67.4589C143.76 66.4456 143.772 65.4291 143.772 64.3997C143.772 35.5349 121.481 0 121.481 0C121.481 0 99.1892 35.5349 99.1892 64.3997C99.1892 65.2936 99.1989 66.181 99.2182 67.062C98.5212 66.3295 97.8081 65.6002 97.082 64.8741C76.6717 44.4638 35.7802 35.0993 35.7802 35.0993C35.7802 35.0993 45.1446 75.9908 65.5549 96.4011C66.1874 97.0336 66.8231 97.6532 67.4588 98.2663ZM121 96.4786C134.543 96.4786 145.521 107.457 145.521 121C145.521 134.543 134.543 145.521 121 145.521C107.457 145.521 96.4786 134.543 96.4786 121C96.4786 107.457 107.457 96.4786 121 96.4786Z" fill="#ff5c35"/>
                  <text font-family="poppins" font-size="200" font-weight="600" fill="#213343" x="285" y="190">adarsh</text>
                </svg>
                {/* <img src={Images.fireflyLogo} width="70" alt="Brand Logo" title="Brand Logo" /> */}
              </div>
              <nav className={`nav-menu ${isMenuActive ? 'is-open' : ''}`.trim()}>
                <ul className='menu-items'>
                  <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
                  <li className="menu-item"><a href="/" className="menu-link">Demos</a></li>
                  <li className="menu-item is-mega-menu">
                    <button className='menu-link' onClick={handleSubMenuClick}><span>Elements</span><i class="bi bi-chevron-down"></i></button>
                    <ul className={`dropdown-megamenu ${isSubMenuActive ? 'submenu-is-open' : ''}`.trim()}>
                      <li>
                        <div className="dropdown-megamenu__content">
                          <div className="row">
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 1</span>
                              <ul className="mega-submenu">
                                <li><a href="javascript:;" className='mega-submenu__link'>Accordion</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Alert</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Buttons</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Blockquotes</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Accordion</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Alert</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Buttons</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Blockquotes</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 2</span>
                              <ul className='mega-submenu'>
                                <li><a href="javascript:;" className='mega-submenu__link'>Cards</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Call To Action</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Counter</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Icon Box</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Cards</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Call To Action</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Counter</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Icon Box</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 3</span>
                              <ul className='mega-submenu'>
                                <li><a href="javascript:;" className='mega-submenu__link'>Lists</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Image Gallery</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Image Frame</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Modals</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Lists</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Image Gallery</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Image Frame</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Modals</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <span className='mega-title'>Element 4</span>
                              <ul className='mega-submenu'>
                                <li><a href="javascript:;" className='mega-submenu__link'>Parallax</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Media</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Progress Bar</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Image And Text</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Parallax</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Media</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Progress Bar</a></li>
                                <li><a href="javascript:;" className='mega-submenu__link'>Image And Text</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item"><a href="/" className="menu-link">Features</a></li>
                  <li className="menu-item"><a href="/" className="menu-link">Typography</a></li>
                </ul>
              </nav>
            </div>

            <div className="app-header-button">
              <button src="/" className="btn btn-primary">Hire Me <i class="bi bi-download"></i></button>
              <div className={`nav-menu-trigger ${isMenuActive ? 'is-open' : ''}`.trim()} onClick={handleMenuClick}>
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

export default Navbar;
