import React from 'react';
import ProgressSteps from './ProgressSteps';

const Finallpadetail = () => {
  const steps = [
    { title: "Enter Donor's Information" },
    { title: "Add Attorney" },
    { title: "Add Preferences" },
    { title: "Final Check: LPA Details" }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
       <ProgressSteps steps={steps} currentStep={4} />

       <div className="flex flex-col w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Final Check: LPA Details</h1>
        <p className="text-gray-600 mt-2">
          Please review all the details carefully before proceeding. Ensure that all information 
          is correct and accurate before submission.
        </p>

        {/* Form Section */}
        <div className="mt-4 space-y-4">
          {/* Type of LPA */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg  font-bold">Type of LPA</label>
            <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
          </div>

          {/* Donor Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg  font-bold">Donor Name</label>
              <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg  font-bold">Donor Date of Birth</label>
              <input type="date" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-lg  font-bold">Donor Email Address</label>
            <input type="email" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-lg  font-bold">Donor Address</label>
            <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-lg  font-bold">When LPA Starts</label>
            <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
          </div>

          {/* Attorney Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg  font-bold">Attorney Name</label>
              <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg  font-bold">Attorney Date of Birth</label>
              <input type="date" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700text-lg  font-bold">Attorney Address</label>
            <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-lg  font-bold">Replacement Attorneys</label>
            <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-lg  font-bold">Certificate Provider</label>
            <input type="text" className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition">
            Save for Later
          </button>
          <button className="px-6 py-2 bg-teal-400 text-white rounded-lg shadow hover:bg-teal-600 transition">
            Confirm and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finallpadetail;
