import React from "react";

const ProgressSteps = ({ steps = [], currentStep = 0 }) => {
  if (!Array.isArray(steps) || steps.length === 0) {
    return <p className="text-gray-500">No steps available</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-xs p-6">
      {steps.map((title, index) => (
        <div key={index}>
          <div className="flex items-center space-x-4">
            <div
              className={`h-6 w-6 rounded-full ${
                index <= currentStep ? "bg-teal-400" : "bg-gray-400"
              }`}
            ></div>
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`h-10 ml-2.5 w-1 my-3 ${
                index < currentStep ? "bg-teal-400" : "bg-gray-400"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
