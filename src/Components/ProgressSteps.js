import React from "react";

const ProgressSteps = ({ steps, currentStep }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-xs p-6">
    {steps.map((step, index) => (
      <div key={index}>
        <div className="flex items-center space-x-4">
          <div className={`h-6 w-6 rounded-full ${index <= currentStep ? "bg-teal-400" : "bg-gray-400"}`}></div>
          <h2 className="text-lg font-semibold">{step.title}</h2>
        </div>
        {index !== steps.length - 1 && (
  <div
    className={`h-10 ml-2.5 w-1 my-3 ${
      index === 0 || index < currentStep ? "bg-teal-400" : "bg-gray-400"
    }`}
  ></div>
)}

      </div>
    ))}
  </div>
  );
};

export default ProgressSteps;
