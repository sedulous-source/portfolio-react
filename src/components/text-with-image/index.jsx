import React from 'react';
import Images from '../../Images';

const TextWithImage = () => {
  return (
    <section className="content-section frame-space-before-medium frame-space-after-medium">
      <div className="container">
        <div className="text-image-teaser text-image-teaser--reverse text-image-teaser--bottom">
          <div className="text-image-teaser__image">
            <figure className="figure">
              <img className="lazy" src={Images.adarshImage} loading="lazy" alt="Adarsh" title="Adarsh" />
              <figcaption className="figure-caption">Description</figcaption>
            </figure>
          </div>
          <div className="text-image-teaser__content bg-pink">
            <h3>What is HubSpot?</h3>
            <p>Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one AI-powered customer platform that grows with your business.</p>
            <a href="/" className='btn btn-link btn-arrow'>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextWithImage;