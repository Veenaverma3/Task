import React from "react";
import { FaCheckCircle, FaLock, FaCheckSquare } from "react-icons/fa";
import { FaBoltLightning, FaIdBadge } from "react-icons/fa6";
import home2im from "../img/Home2.png";

const Home2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-12 lg:space-x-20 lg:space-y-0 p-6 sm:p-8 lg:p-20 bg-gradient-to-r src/App.js">
      {/* Text Section */}
      <div className="max-w-lg text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-semibold capitalize mb-8 sm:mb-10">
          Lasting Power of Attorney Made Easy
        </h1>

        {[
          "Fast and easy setup.",
          "Transparent pricing.",
          "Expert-reviewed for accuracy.",
          "Secure and encrypted data.",
          "Modify anytime with ease.",
        ].map((text, index) => (
          <div key={index} className="flex items-center justify-center lg:justify-start mb-4">
            <FaCheckCircle className="mr-2 sm:mr-3 text-teal-400 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base lg:text-lg">{text}</span>
          </div>
        ))}

        <button className="mt-6 sm:mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-teal-400 text-white font-semibold text-lg sm:text-xl rounded-lg shadow-md hover:bg-blue-700 transition">
          Let's Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-72 sm:w-80 lg:w-96 h-auto">
        <img
          src={home2im}
          alt="Platform Features"
          className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover rounded-lg"
        />

        {/* Testimonial Section */}
        <div className="absolute top-6 sm:top-10 -left-6 sm:-left-20 flex items-center bg-white shadow-lg p-2 sm:p-3 rounded-xl space-x-2 sm:space-x-3">
          <FaBoltLightning className="text-teal-500 text-xl sm:text-3xl" />
          <div className="text-black">
            <h1 className="text-base sm:text-lg font-semibold">
              Complete in <br /> just 15 minutes
            </h1>
          </div>
        </div>

        {/* Lock Icon */}
        <div className="absolute bottom-32 sm:bottom-40 rotate-12 -left-2 sm:-left-6 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center bg-teal-400 rounded-lg shadow-md">
          <FaLock className="text-white text-lg sm:text-xl" />
        </div>

        {/* Expert Guidance Badge */}
        <div className="absolute bottom-4 sm:bottom-9 -right-4 sm:-right-16 flex items-center justify-center w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 rounded-md bg-white text-black shadow-md">
          <FaIdBadge className="text-teal-400 h-10 w-10 text-base sm:text-lg mr-2" />
          <span className="font-medium text-sm sm:text-base">
            With Expert<br /> Guidance
          </span>
        </div>

        {/* Top Right Icon */}
        <div className="absolute top-6 sm:top-10 right-6 sm:-right-5 rotate-12 flex items-end bg-yellow-700 shadow-lg p-2 sm:p-3 rounded-xl">
          <FaCheckSquare className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Home2;
