import React from 'react';
import Images from '../../Images';

const Card = () => {
  return (
    <section className="content-section card-section frame-space-after-medium">
      <div className='container'>
        <h2 className="text-center mb-3">Certifications</h2>
        <p className="lead text-center">Here is a list of our expertisation in developing websites for any platform.</p>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card-teaser" data-bs-toggle="modal" data-bs-target="#javaModalCenter">
              <div className="card-teaser__content">
                <h3>Java</h3>
                <p>Successfully completed a comprehensive Java certification course from Internshala, showcasing proficiency in Java programming</p>
              </div>
              <div className="card-teaser__image">
                <img src={Images.java} alt="Java" />
              </div>
            </div>
            <div className="modal fade" id="javaModalCenter" tabIndex="-1" aria-labelledby="javaModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="javaModalCenterTitle">Certificate</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={Images.adarshImage} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-teaser" data-bs-toggle="modal" data-bs-target="#pythonModalCenter">
              <div className="card-teaser__content">
                <h3>Python</h3>
                <p>Completed an in-depth Python certification course from LinkedIn Learning, equipping me with essential skills in data analysis and software development.</p>
              </div>
              <div className="card-teaser__image">
                <img src={Images.python} alt="Python" />
              </div>
            </div>
            <div className="modal fade" id="pythonModalCenter" tabIndex="-1" aria-labelledby="pythonModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="pythonModalCenterTitle">Certificate</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={Images.adarshImage} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-teaser" data-bs-toggle="modal" data-bs-target="#sqlModalCenter">
              <div className="card-teaser__content">
                <h3>SQL</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolorum ullam eum eligendi, deleniti voluptas.</p>
              </div>
              <div className="card-teaser__image">
                <img src={Images.sql} alt="sql" />
              </div>
            </div>
            <div className="modal fade" id="sqlModalCenter" tabIndex="-1" aria-labelledby="sqlModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="sqlModalCenterTitle">Certificate</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={Images.adarshImage} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-teaser" data-bs-toggle="modal" data-bs-target="#htmlCssJsModalCenter">
              <div className="card-teaser__content">
                <h3>HTML/CSS/JS</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolorum ullam eum eligendi, deleniti voluptas.</p>
              </div>
              <div className="card-teaser__image">
                <img src={Images.htmlCssJs} alt="htmlCssJs" />
              </div>
            </div>
            <div className="modal fade" id="htmlCssJsModalCenter" tabIndex="-1" aria-labelledby="htmlCssJsModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="htmlCssJsModalCenterTitle">Certificate</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={Images.adarshImage} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;