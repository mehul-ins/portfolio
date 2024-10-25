import React from "react";
import image from '../assets/images/profile.jpeg'
export default function Home() {
  return (
    <>
    <div className=" h-lvh flex justify-center gap-7 pt-32">
      <div className="flex flex-col h-96 justify-center gap-4"> 
        <p className="text-white text-4xl">Hi</p>
        <p>
          <span className="text-white text-7xl">I'm </span>
          <span className="text-7xl my-font text-[rgb(25,104,31)]">Mehul Vig</span>
        </p>
        <p className="text-white text-5xl">A Frontend Web Developer</p>
      </div>
      <div>
      <img src={image} alt="profile image" className="h-96 rounded-xl shadow-lg" />
      </div>    
    </div>
     <div className='h-0.5 bg-[#3d444d]'></div>
     </>
  );
}
