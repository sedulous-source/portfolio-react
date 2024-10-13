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
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor.</p>
            <a href="/" className='btn btn-link btn-arrow'>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextWithImage;