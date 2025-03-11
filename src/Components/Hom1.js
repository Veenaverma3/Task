import React from "react";
import { FaLock, FaCheckDouble, FaHeart } from "react-icons/fa6";
import homeimg from "../img/homimg.png";
import { FaCheckSquare } from "react-icons/fa";

const Hom1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around px-6 py-12 bg-gradient-to-r from-orange-100 to-green-50">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 max-w-lg md:max-w-xl">
        <div className="text-6xl font-serif font-bold text-gray-800 leading-tight">
          Plan Your <br /> Legacy, Securely <br /> and Easily
        </div>
        <div className="bg-yellow-700 h-2 w-32 rounded-full"></div>
        <div className="text-lg text-gray-600 max-w-md">
          Create a legally-binding will in minutes, guided by experts and securely stored for your peace of mind.
        </div>

        {/* Button Group */}
        <div className="flex space-x-4">
          <button className="bg-teal-500 rounded-md text-white text-xl py-3 px-8 hover:bg-teal-600 transition duration-300 ease-in-out shadow-lg">
            Start My Will
          </button>
          <button className="text-teal-500 text-xl border-2 border-teal-500 rounded-md py-3 px-8 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section - Image with Icons */}
      <div className="relative mt-8 md:mt-0 md:max-w-md flex justify-center">
        <img src={homeimg} alt="Home Image" className="max-w-full h-auto rounded-lg shadow-lg" />

        {/* Icon 1 - Security Lock (Bottom Left) */}
        <div className="absolute bottom-32 sm:bottom-40 rotate-12 -left-2 sm:-left-6 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center bg-yellow-400 rounded-lg shadow-md">
                 <FaLock className="text-white text-lg sm:text-xl" />
               </div>

        {/* Icon 2 - Expert Guidance (Bottom Right) */}
        <div className="absolute bottom-4 sm:bottom-9 -right-4 sm:-right-16 flex items-center justify-center w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 rounded-md bg-white text-black shadow-md">
        <FaCheckDouble className="text-teal-500 text-xl" />
          <span className="ml-2 text-sm text-gray-700">Legally Valid and Easy</span>
        </div>

        {/* Icon 3 - Fast Processing (Top Left) */}
        <div className="absolute top-6 sm:top-10 -left-6 sm:-left-20 flex items-center bg-white shadow-lg p-2 sm:p-3 rounded-xl space-x-2 sm:space-x-3">
        <FaHeart className="text-teal-400 text-xl" />
          <span className="ml-2 text-sm text-gray-700">Protect Your <br></br>Loved Once
          </span>
        </div>

        {/* Icon 4 - Verified (Top Right) */}
          <div className="absolute top-6 sm:top-10 right-6 sm:-right-5 rotate-12 flex items-end bg-yellow-400 shadow-lg p-2 sm:p-3 rounded-xl">
                  <FaCheckSquare className="text-white" />
                </div>
      </div>
    </div>
  );
};

export default Hom1;
