import React, { useEffect, useRef } from "react";
import image from '../assets/images/progile.jpeg';

export default function Home() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const img = imageRef.current;
    
    if (title && img) {
      title.style.opacity = '0';
      img.style.opacity = '0';
      
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
      }, 600);
    }
  }, []);

  return (
    <div id="home" className="min-h-screen flex items-center bg-black">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div 
            ref={titleRef} 
            className="transition-all duration-1000 transform translate-y-10"
          >
            <p className="text-[rgb(25,104,31)] text-lg font-light tracking-wider mb-2">WELCOME</p>
            <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-[rgb(25,104,31)]">Mehul Vig</span>
            </h1>
            <p className="text-white/70 text-xl sm:text-2xl font-light mb-8">
              Frontend Web Developer
            </p>
          </div>
          
          <div 
            ref={imageRef} 
            className="transition-all duration-1000 transform translate-y-10"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[rgb(25,104,31)] rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src={image} 
                alt="Mehul Vig" 
                className="h-64 w-64 sm:h-80 sm:w-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}