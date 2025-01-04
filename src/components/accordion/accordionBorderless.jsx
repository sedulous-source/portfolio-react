import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle";

const AccordionDefault = () => {
  return (
    <>
      <section className="accordion-section frame-space-after-medium">
        <div className="container">
          <div className="accordion accordion--borderless" id="accordionColored">
            <div className="accordion-item">
              <div className="accordion-header" id="heading-colored">
                <button className="accordion-button h4" type="button" data-bs-toggle="collapse" data-bs-target="#col-1" aria-expanded="false" aria-controls="col-1">
                  <span>Accordion Header Item #1</span>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <div id="col-1" className="accordion-collapse collapse show" data-bs-parent="#accordionColored">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button collapsed h4" type="button" data-bs-toggle="collapse" data-bs-target="#col-2" aria-expanded="false" aria-controls="col-2">
                  <span>Accordion Header Item #1</span>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <div id="col-2" className="accordion-collapse collapse" data-bs-parent="#accordionColored">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button h4" type="button" data-bs-toggle="collapse" data-bs-target="#col-3" aria-expanded="false" aria-controls="col-3">
                  <span>Accordion Header Item #1</span>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <div id="col-3" className="accordion-collapse collapse" data-bs-parent="#accordionColored">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccordionDefault;