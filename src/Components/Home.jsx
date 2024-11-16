import React from "react";
// import image from '../assets/images/profile.jpeg'
import image from '../assets/images/progile.jpeg'
export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center gap-7 p-32 sm:flex-row">
      <div className="flex flex-col justify-center gap-4 "> 
        <p className="text-white text-md sm:text-4xl">Hi</p>
        <p>
          <span className="text-white text-xl sm:text-7xl ">I'm </span>
          <span className="text-xl sm:text-7xl my-font text-[rgb(25,104,31)]">Mehul Vig</span>
        </p>
        <p className="text-white text-xl sm:text-7xl">A Frontend Web Developer</p>
      </div>
      <div>
      <img src={image} alt="profile image" className="h-44 rounded-xl sm:h-96" />
      </div>    
    </div>
     <div className='h-0.5 bg-[#3d444d]'></div>
     </>
  );
}
