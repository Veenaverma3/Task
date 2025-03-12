import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ProgressSteps from './ProgressSteps';

const Certificateprovider = () => {
  const navigate = useNavigate();
  const steps = [
    { title: "Enter Donor's Information" },
    { title: "Add Attorney" },
    { title: "Add Preferences" },
    { title: "Final Check: LPA Details" }
  ];

  return (
    <div className="flex flex-col mt-14 lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      <ProgressSteps steps={steps} currentStep={1} />

       <div className="flex flex-col w-full max-w-2xl space-y-6 p-8 bg-white rounded-lg shadow">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 font-bold hover:text-black mb-4">
          <FaArrowLeft className="mr-2 text-teal-400" /> Back
        </button>

         <h1 className="text-2xl font-semibold text-gray-800">Add a Certificate Provider</h1>
        <p className="text-gray-600">
          A certificate provider is an independent person who confirms that the donor understands their LPA and 
          is not under pressure to make it. They play an important role in ensuring the document is legally valid.
        </p>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => navigate('/')} 
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button 
            onClick={() => navigate('/certidet')} 
            className="px-6 py-2 bg-teal-400 text-white rounded-lg shadow hover:bg-teal-600 transition"
          >
            Add a Certificate Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificateprovider;
