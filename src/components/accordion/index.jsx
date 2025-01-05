import React from 'react';
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Accordion = () => {
  return (
    <>
      <section className="accordion-section frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <h2 className="text-center mb-3">FAQs</h2>
          <p className="lead text-center">Your Questions Answered: Build, Maintain, and Showcase Your IT Portfolio.</p>
          <div className="accordion accordion--plus accordion--outline" id="accordionExample">
            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is an IT portfolio?
                </button>
              </div>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  An IT portfolio is a collection of your skills, certifications, projects, and achievements in the field of information technology. It showcases your expertise to potential employers or clients.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Why do I need an IT portfolio?
                </button>
              </div>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  An IT portfolio highlights your practical skills and accomplishments, giving you a competitive edge in job applications or client proposals.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What should I include in my IT portfolio?
                </button>
              </div>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Include your resume, technical skills, certifications, projects (with descriptions), client testimonials, and links to any live work or repositories (like GitHub).
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Should I include personal projects in my portfolio?
                </button>
              </div>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Yes, personal projects demonstrate initiative and creativity. Ensure they are relevant and showcase your technical expertise.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Can I include group projects in my portfolio?
                </button>
              </div>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Yes, but clearly state your role and contributions to the project.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordion;