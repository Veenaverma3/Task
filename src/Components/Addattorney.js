import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Addattorney = () => {
  const steps = [
    "Enter Donor's Information",
    "Add Attorney",
    "Add Preferences",
    "Final Check: LPA Details",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* First Column: Progress Steps */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-xs p-6">
        {steps.map((title, index) => (
          <div key={index}>
            <div className="flex items-center space-x-4">
              <div
                className={`h-6 w-6 rounded-full ${
                  index <= 1 ? "bg-teal-400" : "bg-gray-400"
                }`}
              ></div>
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`h-10 ml-2.5 w-1 my-3 ${
                  index <= 0 ? "bg-teal-400" : "bg-gray-400"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Second Column: LPA Usage Information */}
      <div className="flex flex-col w-full max-w-2xl space-y-6">
        <div className="bg-white shadow-md rounded-lg p-8">
          <button className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6">
            <FaArrowLeft className="mr-2 text-teal-400" />
            Back
          </button>
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            Who are the attorneys?
          </h1>

          {/* First Section */}
          <div className="border-gray-300 rounded-lg p-6 mt-4">
            <h2 className="text-xl font-medium mb-4 text-gray-800">
              Attorneys are people the donor appoints to make decisions on their
              behalf.
            </h2>
            <ul className="list-disc text-lg ml-5 text-gray-700">
              <li>A donor can have one or more attorneys.</li>
              <li>Attorneys must be 18 or older.</li>
              <li>
                Attorneys must have mental capacity – the ability to make
                decisions.
              </li>
              <li>
                An attorney must not be bankrupt or subject to a debt relief
                order.
              </li>
            </ul>

            <p className="text-gray-700 text-justify mt-6 text-lg">
              The most important thing is that the attorneys are people the
              donor can trust to respect their wishes and act in their best
              interests.
            </p>
            <p className="text-gray-700 mt-6 text-justify text-lg">
              You will be asked if the donor would like to add replacement
              attorneys in a separate question. These would step in if the
              original attorneys are unable or unwilling to continue.
            </p>
          </div>
        </div>

        {/* Second Section: Attorney Decision Options */}
        <div className="bg-white border border-green-600 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            How should your Attorneys make decisions?
          </h2>

          <div className="space-y-3">
            {[
              "I only appoint one attorney",
              "Jointly and severally",
              "Jointly",
              "Jointly for some decisions and jointly and severally for other decisions",
            ].map((option, idx) => (
              <div
                key={idx}
                className={`p-3 border rounded-lg shadow-sm cursor-pointer transition ${
                  idx === 1
                    ? "bg-teal-500 text-white font-medium hover:bg-teal-600"
                    : "text-gray-800 bg-white hover:bg-green-100"
                }`}
              >
                {option}
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-3 bg-teal-400 border text-white text-lg font-semibold rounded-full shadow-md hover:bg-teal-600 transition">
              Continue & Add Attorney
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addattorney;
