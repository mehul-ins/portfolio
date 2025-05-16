import React, { useState } from "react";

function SocialIcon({ icon, href, delay }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-500 delay-${delay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <div className={`absolute inset-0 bg-[rgb(25,104,31)] rounded-full transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-20' : 'scale-90 opacity-0'}`}></div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 group-hover:border-[rgb(25,104,31)] transition-all duration-300">
          <i className={`bx ${icon} text-2xl text-gray-400 group-hover:text-white transition-colors duration-300`}></i>
        </div>
      </div>
    </a>
  );
}

export default function Connect() {
  return (
    <div id="connect" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl font-bold mb-2">Connect With Me</h2>
        <div className="w-16 h-1 bg-[rgb(25,104,31)] mx-auto mb-10"></div>
        
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          Feel free to reach out for collaborations or just a friendly chat
        </p>
        
        <div className="flex justify-center gap-6 mb-10">
          <SocialIcon 
            icon="bxl-github" 
            href="https://github.com/mehul-ins"
            delay="100"
          />
          <SocialIcon 
            icon="bxl-linkedin-square" 
            href="https://www.linkedin.com/in/mehul-vig-828842312/"
            delay="200"
          />
          <SocialIcon 
            icon="bxl-instagram" 
            href="https://www.instagram.com/mxhul_10?igsh=bXdkaWRxcmR1cTF5"
            delay="300"
          />
          <SocialIcon 
            icon="bxl-twitter" 
            href="https://x.com/mehul_vig?t=xAU4gLfRVOIwQstBnVVf7A&s=08"
            delay="400"
          />
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mehul Vig. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}