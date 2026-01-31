
import React, { useState, useEffect, useRef } from 'react';
import CodeFloater from './CodeFloater';
import Blob from './Blob';

const About = () => {
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  
  const words = [
    "Full-Stack Developer",
    "React Developer",
    "Software Engineer", 
    "Database Integration Expert"
  ];

  // Trigger scroll animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Typing effect - EXTREMELY FAST VERSION
  useEffect(() => {
    let timeout;
    
    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing forward - EXTREMELY FAST
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1));
          timeout = setTimeout(type, 30); // LIGHTNING FAST TYPING
        } else {
          // Finished typing, VERY SHORT pause
          timeout = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, 600); // MINIMAL PAUSE
        }
      } else {
        // Deleting - EXTREMELY FAST
        if (text.length > 0) {
          setText(currentWord.substring(0, text.length - 1));
          timeout = setTimeout(type, 20); // LIGHTNING FAST DELETING
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          timeout = setTimeout(type, 100); // ALMOST NO PAUSE
        }
      }
    };

    // Start typing immediately
    timeout = setTimeout(type, 100); // INSTANT START
    return () => clearTimeout(timeout);
  }, [text, currentWordIndex, isDeleting]);

  // Mouse move effect for image
  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    imgRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <section id="about">
      <CodeFloater />
      <Blob color="#ff00ff" size="300px" top="10%" left="10%" />
      <Blob color="#009dff" size="250px" bottom="10%" right="10%" delay="2s" />

      <div className={`container about-container fade-up ${showAnimation ? 'show' : ''}`} ref={containerRef}>
        <div 
          className="profile-img-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            ref={imgRef}
            src="/assets/image.jpeg" 
            alt="Asadullah Magsi" 
            className="profile-img img-fluid rounded-circle"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/320x320/0088cc/ffffff?text=Asadullah+Magsi";
            }}
          />
        </div>

        <div className="hero-text">
          <h5 className="text-muted">Hi, I'm</h5>
          <h1 className="display-4 fw-bold mb-3">Asadullah Magsi</h1>
          <h3 className="gradient-text mb-4">
            <span className="typing-text">{text}</span>
            <span className="blinking-cursor">|</span>
          </h3>
          <p className="lead mb-4">
            I craft modern, high-performance, and visually engaging web experiences.
          </p>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
            <a href="https://smiupk-my.sharepoint.com/:w:/g/personal/csc23f013_stu_smiu_edu_pk/IQD_mCfF1y3UQ7cm_jHanXbWAe3IWccqIJCUy_HuvCev5QY?e=G4H9Bj" className="btn hero-btn btn-lg">
              <i className="bi bi-file-earmark-person me-2"></i>View Resume
            </a>
            <a href="mailto:magsiasadullah24@gmail.com" className="btn hero-btn btn-lg">
              <i className="bi bi-envelope me-2"></i>Contact Me
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/Asadullah013" className="social-icon" title="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/asadullah-magsi-808597322/" className="social-icon" title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/magsi013?igsh=a3ViN3E4YjB0bmxv" className="social-icon" title="Twitter">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
