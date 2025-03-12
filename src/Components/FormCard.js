import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const FormCard = ({ title, navigateTo }) => {
  const navigate = useNavigate();

  const fields = [
    [{ label: 'Title', type: 'text' }],  
    [
      { label: 'First Name', type: 'text' },
      { label: 'Last Name', type: 'text' }
    ],  
    [
      { label: 'Date of Birth', type: 'date' },
      { label: 'Email', type: 'email' },
      { label: 'Postcode', type: 'number' }
    ]
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 font-bold hover:text-black mb-4"
      >
        <FaArrowLeft className="mr-2 text-teal-400" /> Back
      </button>

      {/* Form Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h1>

      {/* Form Fields */}
      <form className="space-y-4">
        {fields.map((row, rowIndex) => (
          <div key={rowIndex} className={`grid gap-4 ${row.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {row.map(({ label, type }, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-gray-700 font-medium">{label}</label>
                <input 
                  type={type} 
                  placeholder={`Enter ${label}`} 
                  className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400"
                />
              </div>
            ))}
          </div>
        ))}

        {/* Address Field */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-teal-400 underline text-lg font-medium">Enter Address</h2>
          <label className="text-gray-700 font-medium">Address</label>
          <input 
            type="text"  
            placeholder="Enter your address" 
            className="p-2 border rounded w-full focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mt-4">
          <input 
            type="checkbox" 
            id="unable-to-sign" 
            className="w-5 h-5 text-teal-400 border-gray-300 rounded"
          />
          <label htmlFor="unable-to-sign" className="ml-2 text-gray-700">
            Unable to sign the LPA.
          </label>
        </div>
      </form>

      {/* Submit Button */}
      <div className="flex justify-end mt-6">
        <button  
          onClick={() => navigate(navigateTo)} 
          className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
        >
          Add Attorney
        </button>
      </div>
    </div>
  );
};

export default FormCard;
