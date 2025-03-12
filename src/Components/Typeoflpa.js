import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const Typeoflpa = () => {
  const navigate = useNavigate(); 

  return (
    <div className="flex bg-gradient-to-r from-orange-100 to-green-50 flex-col items-center justify-center bg-gray-100 mt-10 mb-16 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
         <button 
          className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6"
          onClick={() => navigate(-1)} 
        >
          <FaArrowLeft className="mr-2 text-teal-400" />
          Back
        </button>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-left mb-6">
          Which type of LPA do you want to make?
        </h1>

        {/* LPA Options */}
        <div className="space-y-4">
          <button 
            className="w-full border-2 border-gray-300 text-gray-700 text-lg font-medium p-4 rounded-lg hover:bg-gray-200 transition"
            onClick={() => navigate("/capacity")}  >
            Property and Financial Affairs
          </button>
          <button 
            className="w-full bg-teal-100 border-2 border-teal-600 text-teal-700 text-lg font-medium p-4 rounded-lg hover:bg-teal-200 transition"
            onClick={() => navigate("/capacity")} // Correct usage of navigate
          >
            Health and Welfare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Typeoflpa;
