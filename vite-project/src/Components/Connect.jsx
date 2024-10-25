import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
export default function Connect() {
    return (
        <div>
            <div className="flex justify-center gap-5 p-7">
                <a className="" href="https://github.com/mehul-ins">
                    <i className='bx bxl-github text-[#3d444d] text-4xl hover:text-white'></i>   
                </a>
                <a className="" href="https://www.linkedin.com/in/mehul-vig-828842312/">
                <i className='bx bxl-linkedin-square text-[#3d444d] text-4xl hover:text-white'></i>
                </a>
                <a
                    className=""
                    href="https://www.instagram.com/mxhul_10?igsh=bXdkaWRxcmR1cTF5"
                >
                   <i class='bx bxl-instagram text-[#3d444d] text-4xl hover:text-white' ></i>
                </a>
                <a className="" href="">
                <i class='bx bxl-twitter text-[#3d444d] text-4xl hover:text-white'></i>
                </a>
            </div>
        </div>
    );
}
