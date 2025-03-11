import React from "react";
import ProgressSteps from "./ProgressSteps";

const Replaceattornydet = () => {
  // Define steps here
  const steps = [
    "Enter Donor's Information",
    "Add Attorney",
    "Add Preferences",
    "Final Check: LPA Details"
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Pass steps prop to ProgressSteps */}
      <ProgressSteps steps={steps} currentStep={2} />

      <div className="flex flex-col w-full max-w-2xl space-y-6">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            Add Replacement Attorney Details
          </h1>
          <p className="text-gray-700 mt-6 text-lg">
            Enter the details of the replacement attorney who will step in if needed.
          </p>

          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button className="px-6 py-3 bg-gray-400 text-white text-lg font-semibold rounded-full shadow-md hover:bg-gray-600 transition">
              Cancel
            </button>
            <button className="px-6 py-3 bg-teal-400 text-white text-lg font-semibold rounded-full shadow-md hover:bg-teal-600 transition">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Replaceattornydet;
