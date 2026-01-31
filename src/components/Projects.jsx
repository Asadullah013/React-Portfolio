import React, { useState, useEffect } from 'react';
import CodeFloater from './CodeFloater';
import Blob from './Blob';

const Projects = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Full Stack E-Commerce Website",
      description: "Developed a responsive e-commerce platform using HTML, CSS, JavaScript, Node.js, Express, and MongoDB Atlas. Features include JWT-based authentication, customer/seller dashboards, dynamic product listing, cart, and order management",
      image: "./assets/Project1.png",
      technologies: ["HTML" , "CSS" , "JavaScript" , "Node.js" , "Express.js" , "MongoDB"],
      liveLink: "https://www.linkedin.com/posts/asadullah-magsi-808597322_internintelligence-frontendintern-ecommercewebsite-activity-7350841757653245953-fPHw/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGZqMgBU2FT58ObwihnUVon8Ilio4mQLRk",
      githubLink: "https://github.com/Asadullah013/E-Commerce-Website"
    },
    {
      id: 2,
      title: "GPA & CGPA Calculator Web App",
      description: "A responsive web application built with React.js, Bootstrap, JavaScript, and Chart.js that helps students calculate their GPA, CGPA, and predict future grades accurately. It includes grading systems for 59 universities, ensuring flexibility and precision.",
      image: "./assets/Project22.png",
      technologies: ["React" , "Chart.js" , "JavaScript" , "Bootstrap" , "CSS"],
      liveLink: "https://cgpacalc-app.vercel.app/",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Library Website",
      description: "BDeveloped a responsive Library Website where users can search books, read books, and explore featured collections. Built using HTML, CSS, Bootstrap, and JavaScript, with Google Books API integration for real-time book data and previews.",
      image: "./assets/Project2.jpeg",
      technologies: ["HTML" , "CSS" , "Bootstrap" , "JavaScript"],
      liveLink: "https://magsi-library.vercel.app/",
      githubLink: "https://github.com/Asadullah013/Library-Website"
    },
    {
      id: 4,
      title: "Todo List Web App",
      description: "A clean and responsive productivity app built with React.js that helps users organize daily tasks efficiently. It features task creation, editing, completion tracking, and local storage support to save progress. Designed with a modern UI for smooth and intuitive user experience.",
      image: "./assets/Project44.jpg",
      technologies: ["React" , "JavaScript" , "Bootstrap" , "CSS" , "HTML"],
      liveLink: "https://todoapp-reactproject.vercel.app/",
      githubLink: "https://github.com/Asadullah013/Todo-Web-App"
    },
    {
      id: 5,
      title: "Responsive School Website",
      description: "Developed a responsive school website for Learnix Academy using HTML, CSS, and Bootstrap. The website provides information about the school, programs, and contact details.",
      image: "./assets/Project4.png",
      technologies: ["HTML" , "CSS" , "Bootstrap"],
      liveLink: "https://learnixacademy-dashboard.vercel.app/",
      githubLink: "https://github.com/Asadullah013/Academy-Dashboard"
    },
    {
      id: 6,
      title: "Login Page with Firebase Authentication",
      description: "Developed a responsive personal portfolio website using HTML, CSS, and JavaScript. The site features sections like About, Skills, Certifications, Projects, Education, and Contact. Designed with a clean layout, mobile responsiveness, and interactive UI elements to showcase my work and technical abilities.",
      image: "./assets/Project5.png",
      technologies: ["HTML" , "CSS" , "JavaScript" , "Firebase"],
      liveLink: "https://intern-intelligence-asad.vercel.app/",
      githubLink: "https://github.com/Asadullah013/InternIntelligence_Login-Page."
    }
  ];

  const handleCardClick = (id) => {
    // On mobile, toggle clicked state
    if (isMobile) {
      setClickedCard(clickedCard === id ? null : id);
    }
  };

  return (
    <section id="projects">
      <CodeFloater />
      <Blob color="#ff00ff" size="300px" top="10%" left="10%" />
      <Blob color="#009dff" size="250px" bottom="10%" right="10%" delay="2s" />

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">My Projects</h2>
          <p className="lead">Check out my recent work</p>
        </div>

        {/* FIXED: Responsive Grid */}
        <div className="row g-4">
          {projects.map(project => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div 
                className={`project-card h-100 ${clickedCard === project.id ? 'mobile-active' : ''}`}
                onClick={() => handleCardClick(project.id)}
              >
                {/* Card Image */}
                <div className="project-img-container position-relative overflow-hidden">
                  <img 
                    src={project.image} 
                    className="card-img-top project-img" 
                    alt={project.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x250/1a1a2e/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  
                  {/* Buttons */}
                  <div className="project-buttons">
                    <a 
                      href={project.liveLink} 
                      className="btn btn-primary btn-sm"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="bi bi-play-circle me-1"></i> Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="btn btn-outline-light btn-sm"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="bi bi-github me-1"></i> Code
                    </a>
                  </div>
                  
                  {/* Mobile Tap Hint */}
                  {isMobile && clickedCard !== project.id && (
                    <div className="mobile-hint">
                      <i className="bi bi-hand-index"></i> Tap for links
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title project-title">{project.title}</h5>
                  <p className="card-text project-description">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="technologies d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
