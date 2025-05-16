import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <div className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm shadow-lg' : 'bg-black'}`}>
        <div className='max-w-5xl mx-auto px-6 py-4'>
          <nav>
            <ul className='flex justify-center space-x-10 text-lg font-medium'>
              {["Home", "About Me", "Connect"].map((item, index) => (
                <li key={index} className='relative group'>
                  <a 
                    href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                    className='text-white opacity-80 hover:opacity-100 transition-all duration-300'
                  >
                    {item}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(25,104,31)] transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className='h-16'></div> 
    </>
  );
}