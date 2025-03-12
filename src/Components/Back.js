import React from "react";
import { FaArrowLeft, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-orange-100 to-green-50 flex items-center justify-center px-4 mb-36 mt-14">
      <div className="bg-white shadow-lg rounded-xl p-4 md:p-8 w-full max-w-xl text-center">
        <button className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6">
          <FaArrowLeft className="mr-2 text-teal-400" />
          Back
        </button>

        <p className="text-lg md:text-2xl font-semibold text-gray-700 mb-6">
          Complete Your Lasting Power of <br /> Attorney for Only{" "}
          <span className="inline-flex items-center text-black">
            <FaDollarSign className="mr-1" /> 99
          </span>
        </p>

        <button
          className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition self-start md:self-auto"
          onClick={() => navigate("/profile")}
        >
          Start my LPA
        </button>
      </div>
    </div>
  );
};

export default Back;
