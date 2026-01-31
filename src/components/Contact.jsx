import React from 'react';
import CodeFloater from './CodeFloater';
import Blob from './Blob';

const Contact = () => {
  return (
    <section id="contact" className="py-5 position-relative overflow-hidden">
      <CodeFloater />
      <Blob color="rgba(0, 123, 255, 0.08)" size="350px" top="15%" left="5%" />
      <Blob color="rgba(0, 123, 255, 0.05)" size="300px" bottom="15%" right="5%" delay="2s" />
      
      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">Get In Touch</h2>
          
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* Blue-themed glass morphism contact card */}
            <div className="p-4 p-md-5 rounded-4 mb-4" style={{
              background: 'rgba(248, 249, 255, 0.85)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              border: '1px solid rgba(0, 123, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 123, 255, 0.12)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Blue gradient bar on top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: 'linear-gradient(90deg, #007bff, #0056b3)',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
              }}></div>

              <form 
                action="https://formspree.io/f/mrbkrynv" 
                method="POST" 
                className="contact-form pt-2"
              >
                <div className="row mb-4">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="form-group">
                      <label className="form-label text-muted mb-2 small fw-medium">Your Name</label>
                      <div style={{ position: 'relative' }}>
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control form-control-lg px-4 py-3"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(0, 123, 255, 0.25)',
                            borderRadius: '10px',
                            color: '#333'
                          }}
                          required 
                        />
                        <i className="fas fa-user" style={{
                          position: 'absolute',
                          right: '15px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#007bff'
                        }}></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label text-muted mb-2 small fw-medium">Your Email</label>
                      <div style={{ position: 'relative' }}>
                        <input 
                          type="email" 
                          name="email" 
                          className="form-control form-control-lg px-4 py-3"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(0, 123, 255, 0.25)',
                            borderRadius: '10px',
                            color: '#333'
                          }}
                          required 
                        />
                        <i className="fas fa-envelope" style={{
                          position: 'absolute',
                          right: '15px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#007bff'
                        }}></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="form-group mb-4">
                  <label className="form-label text-muted mb-2 small fw-medium">Your Message</label>
                  <div style={{ position: 'relative' }}>
                    <textarea 
                      name="message" 
                      className="form-control form-control-lg px-4 py-3"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(0, 123, 255, 0.25)',
                        borderRadius: '10px',
                        color: '#333',
                        resize: 'none',
                        minHeight: '150px'
                      }}
                      placeholder="Tell me about your project..."
                      rows="4" 
                      required
                    ></textarea>
                    <i className="fas fa-pen" style={{
                      position: 'absolute',
                      right: '15px',
                      top: '20px',
                      color: '#007bff'
                    }}></i>
                  </div>
                </div>
                
                <div className="text-center mt-5">
                  <button 
                    type="submit" 
                    className="btn px-5 py-3 rounded-pill fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, #007bff, #0056b3)',
                      color: 'white',
                      border: 'none',
                      fontSize: '1.1rem',
                      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      width: '100%',
                      maxWidth: '300px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.6)';
                      e.target.style.background = 'linear-gradient(135deg, #0069d9, #004a99)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.4)';
                      e.target.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
                    }}
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>

           
          </div>
        </div>
      </div>

      {/* Blue floating elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '8%',
          width: '60px',
          height: '60px',
          background: 'rgba(0, 123, 255, 0.1)',
          borderRadius: '15px',
          transform: 'rotate(45deg)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(0, 123, 255, 0.15)',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '8%',
          width: '40px',
          height: '40px',
          background: 'rgba(0, 123, 255, 0.1)',
          borderRadius: '50%',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(0, 123, 255, 0.15)',
          animation: 'float 10s ease-in-out infinite 1s'
        }}></div>
      </div>
    </section>
  );
};

export default Contact;