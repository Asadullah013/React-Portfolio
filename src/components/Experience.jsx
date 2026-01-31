
import React from 'react';
import CodeFloater from './CodeFloater';
import Blob from './Blob';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Intern Intelligence",
      description: "Built responsive and modern UIs using HTML, CSS, and JavaScript. Worked on API integration and real-world web projects.",
      image: "./assets/E1.jpg",
      modalId: "imageModal"
    }
  ];

  return (
    <section id="experience" className="py-5 position-relative">
      <CodeFloater />
      <Blob color="#ff00ff" size="300px" top="10%" left="10%" />
      <Blob color="#009dff" size="250px" bottom="10%" right="10%" delay="2s" />
      
      <div className="container">
        {/* CENTERED TITLE - Add text-center class */}
      <div className="d-flex justify-content-center">
  <h2 className="section-title mb-5">Experience</h2>
</div>
        <div className="row justify-content-center">
          {experiences.map(exp => (
            <div key={exp.id} className="col-lg-8 col-md-10 mb-4">
              <div className="experience-card">
                <img 
                  src={exp.image} 
                  alt="Experience" 
                  data-bs-toggle="modal" 
                  data-bs-target={`#${exp.modalId}`}
                />
                <div className="experience-text">
                  <h4>{exp.title}</h4>
                  {/* Changed text-muted to use theme */}
                  <p className="mb-2 company-text">{exp.company}</p>
                  <p className="description-text">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {experiences.map(exp => (
        <div key={exp.id} className="modal fade" id={exp.modalId} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0">
                <img src={exp.image} className="img-fluid rounded-4" alt="Experience Full View" />
              </div>
              <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"></button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
