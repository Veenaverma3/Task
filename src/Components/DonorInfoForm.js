import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const DonorInfoForm = ({ title }) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg w-full max-w-2xl">
      <button className="flex items-center text-gray-600 font-bold hover:text-black mb-4">
        <FaArrowLeft className="mr-2 text-teal-400" /> Back
      </button>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['Title', 'First Name', 'Last Name', 'Date of Birth'].map((label, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-gray-700">{label}</label>
            <input type={label === 'Date of Birth' ? 'date' : 'text'} className="p-2 border rounded w-full" />
          </div>
        ))}
      </form>
    </div>
  );
};

export default DonorInfoForm;
