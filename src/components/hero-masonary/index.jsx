import React, { useEffect } from 'react';
import Images from '../../Images';
import Video from '../../video/hero-video.mp4';

const HeroMasonrySection = () => {
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
        <div className="hero-masonry-grid hero-masonry-grid--css">
          <div className="hero-masonry-item hero-masonry-teaser--large">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-156x85">
                <video playsInline className="object-fit-cover" ><source src={Video} type="video/mp4" /></video>
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

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-light-green">
                <p>Lorem<br />Ipsum</p>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-orange">
                <p>Lorem-Ipsum <br />Dolar</p>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-light-blue">
                <p>Dolar<br />Ipsum<br />Laura</p>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--medium">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-412x341">
                <div className="carousel-autoplay">
                  <img className="object-fit-cover carousel-autoplay__item" src={Images.adarshImage} />
                  <img className="object-fit-cover carousel-autoplay__item" src={Images.hero} />
                </div>
                <div className="hero-masonry-teaser__media__link">
                  <a Sub Title target="_blank" className="btn btn-white btn-arrow btn-outline">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-lila">
                <p>Tecnology<br />Here</p>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-green">
                <p>Ipsumdolar <br />Lauram Hall elex</p>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-pink">
                <p>Internationale <br />Journey- <br /> festival</p>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-violet">
                <p>Jugtheater- <br /> Jalsa</p>
              </div>
            </div>
          </div>

          <div className="hero-masonry-item hero-masonry-teaser--small">
            <div className="hero-masonry-teaser">
              <div className="hero-masonry-teaser__media ratio ratio-200x164">
                <img className="object-fit-cover" src={Images.adarshImage} />
                <div className="hero-masonry-teaser__media__link">
                  <p>Sub Title</p>
                  <a href="/" target="_blank" className="btn btn-white btn-link btn-arrow">Know More</a>
                </div>
              </div>
              <div className="hero-masonry-teaser__content bg-yellow">
                <p>Techclusive- <br /> Bibarer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMasonrySection;
