import React from "react";
import { FaCheckCircle, FaLock, FaCommentDots } from "react-icons/fa";
import hom4img from "../img/Home$img.png";
import john from "../img/john williams.png";
import { FaAngleRight } from "react-icons/fa6";

const Hom4 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-12 lg:space-x-20 lg:space-y-0 p-6 sm:p-8 lg:p-20  bg-gradient-to-r from-slate-200 via-yellow-100 to-green-100">
      {/* Text Section */}
      <div className="max-w-lg text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-semibold capitalize mb-8 sm:mb-10">
          Why you'll love <br /> our platform
        </h1>

        {[
          "Create your will in just minutes.",
          "Clear, fixed pricing with no surprises.",
          "Reviewed by legal professionals for accuracy.",
          "Your data is encrypted and protected.",
          "Easily update your will as needed.",
        ].map((text, index) => (
          <div key={index} className="flex items-center justify-center lg:justify-start mb-4">
            <FaCheckCircle className="mr-2 sm:mr-3 text-green-500 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base lg:text-lg">{text}</span>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="relative w-72 sm:w-80 lg:w-96 h-auto">
        {/* Background Image */}
        <img
          src={hom4img}
          alt="Platform Overview"
          className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover rounded-lg"
        />

        {/* John Williams Section */}
        <div className="absolute top-6 sm:top-10 -left-6 sm:-left-20 flex items-center bg-white shadow-lg p-2 sm:p-3 rounded-xl space-x-2 sm:space-x-3">
          <img
            className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300"
            src={john}
            alt="John Williams"
          />
          <div className="text-black">
            <h1 className="text-base sm:text-lg font-semibold">John Williams</h1>
            <p className="text-xs sm:text-sm">Quick and easy process</p>
          </div>
          <FaCommentDots className="text-gray-500 text-xl sm:text-2xl" />
        </div>

        {/* Lock Icon */}
        <div className="absolute bottom-32 sm:bottom-40 rotate-12 -left-2 sm:-left-24 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center bg-teal-400 rounded-lg shadow-md">
          <FaLock className="text-white text-lg sm:text-xl" />
        </div>

        {/* Legal Review Button */}
        <div className="absolute bottom-4 sm:bottom-7 -right-4 sm:-right-16 flex items-center justify-center w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 rounded-md bg-white text-black shadow-md">
          <FaAngleRight className="text-teal-500 text-base sm:text-lg mr-2" />
          <span className="font-medium text-sm sm:text-base">Legal Review</span>
        </div>
      </div>
    </div>
  );
};

export default Hom4;
