import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';

const Addattorneyinfo = () => {
  const steps = [
    { title: "Enter Donor's Information", active: true },
    { title: "Add Attorney", active: true },
    { title: "Add Preferences", active: false },
    { title: "Final Check: LPA Details", active: false },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* First Column: Progress Steps */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-xs p-6">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center space-x-4">
              <div className={`h-6 w-6 rounded-full ${index <= 1 ? "bg-teal-400" : "bg-gray-400"}`}></div>
              <h2 className="text-lg font-semibold">{step.title}</h2>
            </div>
            {index !== steps.length - 1 && (
              <div className={`h-10 ml-2.5 w-1 my-3 ${index <= 0 ? "bg-teal-400" : "bg-gray-400"}`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Second Column: Donor Info Form & Donor Info Display */}
      <div className="flex flex-col w-full max-w-2xl space-y-6">
        {/* Donor Info Form */}
        <div className="p-6 bg-white shadow rounded-lg">
          <div className="mb-6">
            <button className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6">
              <FaArrowLeft className="mr-2 text-teal-400" />
              Back
            </button>
            <h1 className="text-3xl font-serif">Add Attorney Information</h1>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Title" className="p-2 border-2 rounded w-full sm:col-span-2" />
             <input type="text" placeholder="First Name" className="p-2 border rounded w-full" />
            <input type="text" placeholder="Last Name" className="p-2 border rounded w-full" />
            <input type="date" className="p-2 border rounded w-full sm:col-span-2" />
            <input type="email" placeholder="Email Address" className="p-2 border rounded w-full" />
            <input type="text" placeholder="Postcode Lookup" className="p-2 border rounded w-full sm:col-span-2" />
          </form>

          {/* Address Section */}
          <div className="mt-6">
            <h1 className="text-2xl text-green-700 underline font-serif">Enter Address Manually</h1>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <label className="text-gray-700 font-medium">Address Line 1</label>
              <input type="text" className="p-2 border rounded w-full" />
            </div>

            {/* Checkbox */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="unable-to-sign"
                className="w-5 h-5 text-teal-400 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="unable-to-sign" className="ml-2 text-gray-700">
                The attorney is unable to sign or make a mark on the LPA.
              </label>
            </div>

            {/* Add Donor Button */}
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 bg-teal-400 text-white font-semibold rounded hover:bg-teal-500">
                Add Attorney
              </button>
            </div>
          </div>
        </div>

        {/* Donor Info Display */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 font-semibold">The Attorney</p>
            <p className="text-teal-400 cursor-pointer hover:underline">View/Change</p>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <FaPerson className="text-teal-500 text-2xl" />
            <div>
              <p className="font-semibold">Mr John Dae</p>
              <p className="text-gray-600 text-sm">Flat 3B, Baker House, M1 4AB, United Kingdom</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 border border-gray-400 rounded text-gray-600 hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-500">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addattorneyinfo;
