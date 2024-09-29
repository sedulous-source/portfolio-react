import React from 'react';
import Images from '../../Images';

function LandingSection() {
  return (
    <section className="content-section landing-section frame-space-before-medium frame-space-after-medium">
      <span className="blobs blobs--pair">
        <svg width="205" fill="none" viewBox="0 0 205 80" xmlns="http://www.w3.org/2000/svg"><mask width="205" height="80" x="0" y="0"><path fill="#fff" d="M205 0H0v80h205V0z"/></mask><g fill-rule="evenodd" clip-rule="evenodd" ><path fill="#FEEAD6" d="M30.136 80.182c52.743 0 95.5-42.532 95.5-95h-191c0 52.468 42.757 95 95.5 95z"/><path fill="#FFBD3D" d="M130 33.155l51.154-17.05a17.977 17.977 0 0118.393 4.341c7.019 7.02 7.019 18.4 0 25.42a17.977 17.977 0 01-18.393 4.342L130 33.155z"/></g></svg>
      </span>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-last text-end">
            <div className="landing-section__image">
            <span className="blobs blob--small-stars">
              <svg width="100" fill="none" aria-hidden="true" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2956_6856)"><path fill="#BF2434" d="M9.59 5.547a6.75 6.75 0 003.57-1.871A6.835 6.835 0 0015.046.09a.106.106 0 01.21 0 6.83 6.83 0 001.885 3.584 6.75 6.75 0 003.571 1.872.106.106 0 01.09.106.107.107 0 01-.09.105 6.75 6.75 0 00-3.571 1.873 6.837 6.837 0 00-1.885 3.585.108.108 0 01-.105.09.106.106 0 01-.105-.09A6.835 6.835 0 0013.16 7.63a6.75 6.75 0 00-3.572-1.87.106.106 0 01-.093-.106.107.107 0 01.093-.106z"></path><path fill="#FF5C35" d="M.09 11.877a6.753 6.753 0 003.572-1.872A6.834 6.834 0 005.546 6.42a.108.108 0 01.106-.09.106.106 0 01.105.09c.253 1.36.91 2.61 1.885 3.585a6.754 6.754 0 003.573 1.872.107.107 0 010 .21 6.754 6.754 0 00-3.573 1.873 6.835 6.835 0 00-1.885 3.585.108.108 0 01-.105.09.106.106 0 01-.106-.09 6.834 6.834 0 00-1.884-3.585 6.753 6.753 0 00-3.573-1.872.106.106 0 01-.089-.105.107.107 0 01.09-.106z"></path><path fill="#FFA766" d="M9.13 20.243a6.755 6.755 0 003.574-1.872 6.832 6.832 0 001.885-3.585.107.107 0 01.105-.09.106.106 0 01.105.09c.253 1.36.91 2.61 1.885 3.585a6.756 6.756 0 003.574 1.872.106.106 0 01.09.105c0 .026-.01.05-.026.07a.106.106 0 01-.064.036 6.756 6.756 0 00-3.573 1.872 6.833 6.833 0 00-1.886 3.584.107.107 0 01-.105.09.106.106 0 01-.105-.09 6.833 6.833 0 00-1.885-3.585 6.755 6.755 0 00-3.574-1.872.106.106 0 01-.087-.105.107.107 0 01.087-.105z"></path></g><defs><clipPath id="clip0_2956_6856"><path fill="#fff" d="M0 0h20.8v26H0z"></path></clipPath></defs></svg>
            </span>
              <img src={Images.adarshImage} alt="Adarsh" title="Adarsh" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="landing-section__content">
              <p className="subtitle-with-icon">Hi There!</p>
              <h1>I'm Web Developer<br/>Adarsh Sharma</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum.</p>
              <a className="btn btn--lg" href="/">Know more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection;
