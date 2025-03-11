import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Check = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-orange-100 to-green-50 mt-10 mb-14 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-xl">
        {/* Back Button */}
        <button className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6">
          <FaArrowLeft className="mr-2 text-teal-400" />
          Back
        </button>

        {/* Title */}
        <h1 className="text-2xl font-serif font-semibold text-center text-gray-800 mb-4">
          Check if you have mental capacity
        </h1>

        {/* Left-Aligned Description with Bullet Points */}
        <div className="text-left space-y-2">
          <p className="text-gray-700 flex items-start">
            <span className="text-lg mr-2">•</span> You must be 18 or over.
          </p>
          <p className="text-gray-700 flex items-start">
            <span className="text-lg mr-2">•</span> You must be able to make your own decisions at the<br/> 
            time your LPA is made—this is known as having
          </p>

          {/* Highlighted Text */}
          <p className="text-teal-500 text-lg font-medium underline ml-5">
            mental capacity
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition">
            Add Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Check;
