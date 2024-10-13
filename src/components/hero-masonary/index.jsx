import React, { useEffect } from 'react';
import Shuffle from 'shufflejs';
import Images from '../../Images';
import Video from '../../video/hero-video.mp4';

const HeroMasonrySection = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleTabletChange = (e) => {
      if (e.matches) {
        document.querySelectorAll('.hero-masonry-grid').forEach((element) => {
          new Shuffle(element, {
            itemSelector: '.hero-masonry-item',
            sizer: '.my-sizer-element',
            buffer: 1,
          });
        });
      }
    };

    // Initial check
    handleTabletChange(mediaQuery);

    // Register event listener
    mediaQuery.addListener(handleTabletChange);

    // Cleanup function
    return () => {
      mediaQuery.removeListener(handleTabletChange);
    };
  }, []);

  // Carousel functionality
  useEffect(() => {
    let myIndex = 0;
    const carousel = () => {
      const x = document.getElementsByClassName('carousel-autoplay__item');
      if (x.length) {
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove('carousel-visible');
        }
        myIndex += 1;
        if (myIndex > x.length) {
          myIndex = 1;
        }
        x[myIndex - 1].classList.add('carousel-visible');
        setTimeout(carousel, 3000);
      }
    };
    
    carousel(); // Start the carousel

    // Cleanup function to clear timeout if component unmounts
    return () => {
      clearTimeout(carousel);
    };
  }, []);

  // Play button functionality
  useEffect(() => {
    const playButton = document.querySelector('.play-button');
    const videoElement = playButton ? playButton.closest('.hero-masonry-teaser__media').querySelector('video') : null;

    const handlePlayButtonClick = () => {
      if (videoElement) {
        if (videoElement.paused) {
          videoElement.currentTime = 0;
          videoElement.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        } else {
          videoElement.pause();
        }
      }
    };

    if (playButton) {
      playButton.addEventListener('click', handlePlayButtonClick);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (playButton) {
        playButton.removeEventListener('click', handlePlayButtonClick);
      }
    };
  }, []);

  return (
    <section className="hero-masonry-section">
      <div className="container-fluid">
        <div className="row hero-masonry-grid">
          <div className="col-lg-6 hero-masonry-item hero-masonry-item--first">
            <div className="hero-masonry-teaser hero-masonry-teaser--large">
              <div className="hero-masonry-teaser__media ratio ratio-156x85">
                <video playsInline className="object-fit-cover" ><source src={Video} type="video/mp4" /></video>
                {/* <img className="object-fit-cover" src={Images.adarshImage} /> */}
                <button className="play-button btn btn-link">
                  <svg viewBox="0 0 13 16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path d="M11.616 7.148a1 1 0 010 1.7l-10.092 6.21A1 1 0 010 14.21V1.79A1 1 0 011.524.938z" />
                      <path fill="currentColor" d="M10.138 8L1.5 2.684v10.632L10.138 8m1.954 0a.992.992 0 01-.476.852l-10.092 6.21A1 1 0 010 14.21V1.79A1 1 0 011.524.938l10.092 6.21a.992.992 0 01.476.852z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--large">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>75 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-light-green">
                <p>Großer<br />Siedershof</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--large">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>60 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-orange">
                <p>Goethe-Institut <br />Schwäbisch Hall</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--large">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>40 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-light-blue">
                <p>Städte-<br />freundschaft<br />Lappeenranta</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-4 order-first hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--medium">
              <div className="hero-masonry-teaser__media ratio ratio-412x341">
                <div className="carousel-autoplay">
                  <img className="object-fit-cover carousel-autoplay__item" src={Images.adarshImage} />
                  <img className="object-fit-cover carousel-autoplay__item" src={Images.hero} />
                </div>
                <div className="hero-masonry-teaser__media__link">
                  <a href="/" target="_blank" className="btn btn-white btn-arrow btn-outline">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--medium">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>30 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-lila">
                <p>Radio &shy;<br />Sthörfunk</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--medium">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>100 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-green">
                <p>Freilichtspiele <br />Schwäbisch Hall e.V.</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--medium">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>20 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-pink">
                <p>Internationales <br />Jugendtheater- <br /> festival</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--medium">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>20 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-violet">
                <p>Jugendtheater- <br /> festival</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 hero-masonry-item">
            <div className="hero-masonry-teaser hero-masonry-teaser--medium">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>20 Jahre</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Mehr erfahren</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-yellow">
                <p>Rats- <br /> bibliothek</p>
              </div>
            </div>
          </div>

          <div className="col-1 my-sizer-element"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroMasonrySection;
