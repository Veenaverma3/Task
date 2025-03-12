import React from 'react';
import { FaPerson } from 'react-icons/fa6';

const Donorinfodisplaycard = ({firstParagraph}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
       <div className="flex justify-between items-center border-b pb-3">
      <p className="text-gray-600 font-medium">{firstParagraph}</p>        <p className="text-teal-500 cursor-pointer hover:underline text-sm font-medium">
          View/Change
        </p>
      </div>

       <div className="flex items-center space-x-4 mt-4">
        <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-500 rounded-full">
          <FaPerson className="text-2xl" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-xl">Mr. John Dae</p>
          <p className="text-gray-600 text-sm">
            Flat 3B, Baker House, M1 4AB, United Kingdom
          </p>
        </div>
      </div>

       <div className="flex justify-end space-x-4 mt-6">
        <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          Cancel
        </button>
        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Donorinfodisplaycard;
