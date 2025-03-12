import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProgressSteps from './ProgressSteps';

const Whoregister = () => {
  const navigate = useNavigate();  

  const steps = [
    { title: "Enter Donor's Information" },
    { title: "Add Attorney" },
    { title: "Add Preferences" },
    { title: "Final Check: LPA Details" }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      <ProgressSteps steps={steps} currentStep={1} />

      {/* Registration Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        
        {/* Back Button */}
        <button 
          className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6"
          onClick={() => navigate(-1)} // Navigates back to the previous page
        >
          <FaArrowLeft className="mr-2 text-teal-400" />
          Back
        </button>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-left mb-6">
          Who will register the Power of Attorney?
        </h1>

        {/* LPA Options */}
        <div className="space-y-4">
          <button 
            className="w-full border-2 border-gray-300 text-gray-700 text-lg font-medium p-4 rounded-lg hover:bg-gray-200 transition"
            onClick={() => navigate("/instruction")}
          >
            Donor
          </button>
          <button 
            className="w-full bg-teal-100 border-2 border-teal-600 text-teal-700 text-lg font-medium p-4 rounded-lg hover:bg-teal-200 transition"
            onClick={() => navigate("/instruction")}
          >
            Attorney
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whoregister;
