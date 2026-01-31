import React from 'react';
import CodeFloater from './CodeFloater';
import Blob from './Blob';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  return (
    <section id="skills"> {/* Changed from div to section */}
      <CodeFloater />
      <Blob color="#ff00ff" size="300px" top="10%" left="10%" />
      <Blob color="#009dff" size="250px" bottom="10%" right="10%" delay="2s" />

      <div className="container py-5">
        <div className="d-flex justify-content-center">
  <h2 className="section-title mb-5">Skills</h2>
</div>

        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="skill-card">
                <img src={skill.icon} alt={skill.name} className="mb-2" />
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;