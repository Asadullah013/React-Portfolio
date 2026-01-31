import React from 'react';
import CodeFloater from './CodeFloater';
import Blob from './Blob';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Front-End Development",
      company: "Educate Sindh",
      description: "Learned SQL, CSS, Bootstrap, Javascript, Git and Github version control.",
      image: "./assets/C1.png",
      modalId: "certModal1"
    },
    {
      id: 2,
      title: "JavaScript for Beginners",
      company: "Simplilearn",
      description: "Completed a JavaScript for Beginners course covering Foundation of JavaScript.",
      image: "./assets/C2.jpg",
      modalId: "certModal2"
    },
    {
      id: 3,
      title: "Introduction to Java",
      company: "Sololearn",
      description: "Learned Java language, GUI, and JDBC.",
      image: "./assets/C3.png",
      modalId: "certModal3"
    },
    {
      id: 4,
      title: "GenAI Overview for Project Managers ",
      company: "PMI",
      description: "Covered JS syntax, DOM manipulation, and event handling fundamentals through real tasks.",
      image: "./assets/C4.jpg",
      modalId: "certModal4"
    },
    {
      id: 5,
      title: "Introduction to ITIL V4",
      company: "Simplilearn",
      description: "Learned IT Support Desk, IT Technician, and Basic Troubleshooting.",
      image: "./assets/C5.jpg",
      modalId: "certModal5"
    }
  ];

  return (
    <section id="certifications" className="py-5 position-relative">
      <CodeFloater />
      <Blob color="#ff9900" size="300px" top="10%" left="15%" />
      <Blob color="#0099cc" size="250px" bottom="15%" right="12%" delay="2s" />
      
      <div className="container">
        <div className="d-flex justify-content-center">
  <h2 className="section-title mb-5">Certifications</h2>
</div>

        <div className="row justify-content-center">
          {certifications.map(cert => (
            <div key={cert.id} className="col-lg-8 col-md-10 mb-4">
              <div className="experience-card">
                <img 
                  src={cert.image} 
                  alt="Certification" 
                  data-bs-toggle="modal" 
                  data-bs-target={`#${cert.modalId}`}
                />
                <div className="experience-text">
                  <h4>{cert.title}</h4>
                  <p className="mb-2 text-muted">{cert.company}</p>
                  <p>{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {certifications.map(cert => (
        <div key={cert.id} className="modal fade" id={cert.modalId} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0">
                <img src={cert.image} className="img-fluid rounded-4" alt="Certification Full View" />
              </div>
              <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"></button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certifications;