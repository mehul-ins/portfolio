import React, { useRef, useEffect, useState } from 'react';
import sih from '../assets/images/sih.jpg';
import acm from '../assets/images/ACM.jpeg';
import savera from '../assets/images/savera.jpeg';
import glitch from '../assets/images/Glitch.jpg';


const modalAnimationStyle = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
`;

function Card({ title, image, event, role, delay, experience }) {
  const cardRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <>
      <div 
        ref={cardRef}
        className="w-full max-w-xs mx-auto transition-all duration-700 opacity-0 translate-y-8 bg-transparent border border-gray-800 rounded-lg overflow-hidden hover:border-[rgb(25,104,31)] hover:shadow-lg hover:shadow-[rgb(25,104,31)]/20"
      >
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute top-0 left-0 px-3 py-1 m-2 bg-black/70 rounded-md">
            <p className="text-sm text-white font-medium">{title}</p>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-white text-lg font-semibold mb-2">{event}</h3>
          <p className="text-gray-400 mb-4">Role: {role}</p>
          <button 
            onClick={() => setShowModal(true)}
            className="w-full py-2 bg-transparent border border-[rgb(25,104,31)] text-[rgb(25,104,31)] rounded-md hover:bg-[rgb(25,104,31)] hover:text-white transition-all duration-300"
          >
            View Work
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div 
            className="relative bg-gray-900 rounded-lg w-full max-w-3xl animate-fadeIn overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[rgb(25,104,31)] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:bg-gradient-to-r"></div>
                </div>
              </div>
              
              <div className="p-6 md:w-1/2">
                <span className="inline-block px-3 py-1 bg-[rgb(25,104,31)]/20 text-[rgb(25,104,31)] rounded-full text-sm font-medium mb-2">
                  {title}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2">{event}</h3>
                <p className="text-gray-300 mb-4">Role: {role}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-2">My Experience</h4>
                  <div className="border-l-2 border-[rgb(25,104,31)] pl-4 py-1 text-gray-400">
                    {experience}
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-lg font-medium text-white mb-2">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {title === "Volunteer" && event === "Smart India Hackathon" && (
                      <>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Marketing</span>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Team Leadership</span>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Event Management</span>
                      </>
                    )}
                    {title === "Experience" && event === "ACM BMU" && (
                      <>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Project Management</span>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Content Creation</span>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Technical Workshops</span>
                      </>
                    )}
                    {title === "Volunteer" && event === "Savera NGO" && (
                      <>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Teaching</span>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Web Design</span>
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-sm text-gray-300">Fundraising</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


function TechIcon({ icon, color }) {
  const iconRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'scale-100');
          entry.target.classList.remove('opacity-0', 'scale-90');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (iconRef.current) {
      observer.observe(iconRef.current);
    }
    
    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={iconRef}
      className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 bg-gray-900 rounded-lg border border-gray-800 hover:border-[rgb(25,104,31)] transition-all duration-300 opacity-0 scale-90"
    >
      <i className={`bx ${icon} text-5xl ${color}`}></i>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about-me" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-white text-3xl font-bold mb-2">Experience</h2>
          <div className="w-16 h-1 bg-[rgb(25,104,31)] mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card 
              title="Volunteer" 
              image={sih} 
              event="Smart India Hackathon" 
              role="Marketing Executive"
              experience="During the SIH Hackathon, I managed judge coordination and public relations, ensuring smooth operations for team presentations. Additionally, I focused on engaging and encouraging students to participate through effective marketing and communication."
              delay={100}
            />
            <Card 
              title="Experience" 
              image={acm} 
              event="ACM BMU" 
              role="EC member"
              experience="As a member of the ACM Design Team, I contributed to designing posters, standees, mini-standees, lanyards, presentation templates, website UIs, and Instagram posts to enhance event branding and engagement. I also participated in event management and operations, developing my skills in graphic design, UI/UX, and coordination while working with a creative team."
              delay={300}
            />
             <Card 
              title="Experience" 
              image={glitch} 
              event="Glitch" 
              role="OC member"
              experience="At Glitch, the annual technical fest, I managed design work, ensured smooth event operations, and hosted the opening ceremony, contributing to a successful and engaging experience for participants.

"
              delay={300}
            />
            <Card 
              title="Volunteer" 
              image={savera} 
              event="Savera NGO" 
              role="Volunteer"
              experience="At Savera, an NGO, I taught students basic subjects, engaged them through playful activities, and provided support in every possible way to create a positive and nurturing environment."
              delay={500}
            />
          </div>
          
          <h2 className="text-white text-3xl font-bold mb-2">Tech Stack</h2>
          <div className="w-16 h-1 bg-[rgb(25,104,31)] mb-10"></div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <TechIcon icon="bxl-react" color="text-blue-400" />
            <TechIcon icon="bxl-tailwind-css" color="text-blue-300" />
            <TechIcon icon="bxl-mongodb" color="text-green-400" />
            <TechIcon icon="bxl-nodejs" color="text-green-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
