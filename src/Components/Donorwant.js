import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProgressSteps from "./ProgressSteps";
import { useNavigate } from "react-router-dom";
 
const Donorwant = () => {
  const navigate=useNavigate();
  const steps = [
    { title: "Enter Donor's Information " },
    { title: "Add Attorney" },
    { title: "Add Preferences" }, 
    { title: "Final Check: LPA Details" }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        <ProgressSteps steps={steps} currentStep={1} />

      {/* Second Column: Content */}
      <div className="flex flex-col w-full max-w-2xl space-y-6">
        <div className="bg-white shadow-md rounded-lg p-8">
          <button className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6">
            <FaArrowLeft className="mr-2 text-teal-400" />
            Back
          </button>
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            Does the donor want any replacement attorneys?
          </h1>

          <div className="border-gray-300 rounded-lg p-6 mt-4">
            <p className="text-gray-700 text-justify mt-6 text-lg">
              Replacement attorneys step in if an original attorney can no longer act.  
              A replacement attorney must meet the same requirements as an original attorney.  
              This includes being 18 or over.
            </p>
            <p className="text-gray-700 mt-6 text-justify text-lg">
              You will be asked if the donor would like to add replacement  
              attorneys in a separate question. These would step in if the  
              original attorneys are unable or unwilling to continue.
            </p>

            <div className="flex justify-between mt-6">
              <button className="px-6 py-3 bg-gray-400 text-white text-lg font-semibold rounded-full shadow-md hover:bg-gray-600 transition">
                Cancel
              </button>
              <button className="px-6 py-3 bg-teal-400 border text-white text-lg font-semibold rounded-full shadow-md hover:bg-teal-600 transition"
              onClick={()=>navigate("/replace")}>
                Continue & Add Attorney
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donorwant;
