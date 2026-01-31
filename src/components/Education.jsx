import React, { useState } from 'react';
import CodeFloater from './CodeFloater';
import Blob from './Blob';

const Education = () => {
  const [activeTab, setActiveTab] = useState('university');

  const educationData = {
    university: [
      {
        id: 1,
        degree: "BS Computer Science",
        institution: "Sindh Madressatul Islam University",
        period: "2022 – Present",
        details: [
          "Currently in 3rd year with strong academic performance",
          "Focus on Web Development, Databases, and Data Structures",
          "Courses: Software Engineering, OOP, Algorithms, Operating System",
          "Active in programming competitions and tech events"
        ],
        icon: "🎓",
        color: "#007bff"
      }
    ],
    college: [
      {
        id: 1,
        degree: "Intermediate (Pre-Engineering)",
        institution: "Govt: Degree College Larkana",
        period: "2020 – 2022",
        details: [
          "Specialized in Mathematics, Physics, and Computer Science",
          "Developed strong analytical and problem-solving skills",
          "Participated in science exhibitions and tech workshops",
          "Built foundation for engineering and programming"
        ],
        icon: "🏫",
        color: "#28a745"
      }
    ],
    school: [
      {
        id: 1,
        degree: "Matriculation (Science)",
        institution: "Govt: High School Bahram",
        period: "2018 – 2020",
        details: [
          "Early development of interest in computers and technology",
          "Excelled in Mathematics and Science subjects",
          "Participated in computer lab projects and competitions",
          "Foundation for pursuing Computer Science career"
        ],
        icon: "📘",
        color: "#ff6b6b"
      }
    ]
  };

  const renderEducationCard = (edu) => (
    <div 
      key={edu.id} 
      className="education-card p-4 rounded-4 mb-4"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${edu.color}30`,
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 15px 35px ${edu.color}20`;
        e.currentTarget.style.borderColor = `${edu.color}60`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = `${edu.color}30`;
      }}
    >
      <div className="d-flex align-items-start gap-4">
        <div 
          className="edu-icon-container p-3 rounded-3"
          style={{
            background: `${edu.color}15`,
            border: `2px solid ${edu.color}30`
          }}
        >
          <div style={{ fontSize: '2rem' }}>{edu.icon}</div>
        </div>
        
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <h3 className="h4 mb-1" style={{ color: edu.color }}>{edu.degree}</h3>
              <h4 className="h5 mb-2" style={{ opacity: 0.9 }}>{edu.institution}</h4>
            </div>
            <span 
              className="badge px-3 py-2"
              style={{
                background: `${edu.color}20`,
                color: edu.color,
                border: `1px solid ${edu.color}40`
              }}
            >
              {edu.period}
            </span>
          </div>
          
          <ul className="list-unstyled mb-0">
            {edu.details.map((detail, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <i 
                  className="bi bi-check-circle-fill me-2 mt-1" 
                  style={{ color: edu.color, fontSize: '0.8rem' }}
                ></i>
                <span style={{ opacity: 0.85 }}>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="education" className="py-5 position-relative min-vh-100">
      <CodeFloater />
      <Blob color="#007bff" size="300px" top="10%" left="10%" />
      <Blob color="#28a745" size="250px" bottom="10%" right="10%" delay="2s" />
      
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">Education Journey</h2>
          <p className="lead" style={{ opacity: 0.8 }}>My academic path in technology and computer science</p>
        </div>

        {/* Tab Navigation */}
        <div className="d-flex justify-content-center mb-5">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn px-4 py-2 ${activeTab === 'university' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('university')}
            >
              <i className="bi bi-mortarboard-fill me-2"></i>
              University
            </button>
            <button
              type="button"
              className={`btn px-4 py-2 ${activeTab === 'college' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setActiveTab('college')}
            >
              <i className="bi bi-building me-2"></i>
              College
            </button>
            <button
              type="button"
              className={`btn px-4 py-2 ${activeTab === 'school' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setActiveTab('school')}
            >
              <i className="bi bi-book-fill me-2"></i>
              School
            </button>
          </div>
        </div>

        {/* Education Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {educationData[activeTab].map(renderEducationCard)}
          </div>
        </div>

        {/* Timeline View (Optional) */}
        <div className="mt-5 pt-4">
          <div className="text-center mb-4">
            <h4 className="h5 mb-3" style={{ opacity: 0.9 }}>Academic Timeline</h4>
          </div>
          
          <div className="position-relative" style={{ height: '80px' }}>
            <div className="position-absolute top-50 start-0 end-0" style={{ height: '3px', background: 'linear-gradient(90deg, #007bff, #28a745, #ff6b6b)' }}></div>
            
            <div className="position-absolute" style={{ left: '0%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '50px',
                  height: '50px',
                  background: '#ff6b6b',
                  border: '3px solid white',
                  boxShadow: '0 0 15px rgba(255, 107, 107, 0.5)'
                }}
              >
                <i className="bi bi-book-fill text-white"></i>
              </div>
              <div className="text-center mt-2">
                <small className="d-block">2018-2020</small>
                <small className="d-block fw-bold">School</small>
              </div>
            </div>
            
            <div className="position-absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '60px',
                  height: '60px',
                  background: '#28a745',
                  border: '3px solid white',
                  boxShadow: '0 0 15px rgba(40, 167, 69, 0.5)'
                }}
              >
                <i className="bi bi-building text-white"></i>
              </div>
              <div className="text-center mt-2">
                <small className="d-block">2020-2022</small>
                <small className="d-block fw-bold">College</small>
              </div>
            </div>
            
            <div className="position-absolute" style={{ right: '0%', top: '50%', transform: 'translate(50%, -50%)' }}>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '70px',
                  height: '70px',
                  background: '#007bff',
                  border: '3px solid white',
                  boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)'
                }}
              >
                <i className="bi bi-mortarboard-fill text-white"></i>
              </div>
              <div className="text-center mt-2">
                <small className="d-block">2022-Present</small>
                <small className="d-block fw-bold">University</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
