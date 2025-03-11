import React from 'react';
import { FaSitemap, FaPuzzlePiece, FaIntercom, FaFileAudio, FaCircle } from 'react-icons/fa'; // Import Font Awesome icons

const Hom2 = () => {
  return (
    <div className="bg-emerald-500 py-20 text-center">
      {/* Main Heading */}
      <div className="text-3xl font-semibold text-white mb-4 md:text-4xl">
        Over 10,000 Families Protected
      </div>

      {/* Subheading */}
      <div className="text-lg text-white opacity-80 mb-6 md:text-xl">
        As seen on
      </div>

      {/* Logos/Brands Section */}
      <div className="flex justify-center gap-8 flex-wrap px-4">
        <div className="flex justify-center items-center text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-4 md:mb-0 md:px-8 md:py-4">
          <FaPuzzlePiece className="text-3xl md:text-4xl mr-3" />
          <p className="font-medium text-lg md:text-2xl text-white">Unsplash</p>
        </div>
        <div className="flex justify-center items-center text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-4 md:mb-0 md:px-8 md:py-4">
          <FaSitemap className="text-3xl md:text-4xl mr-2" />
          <p className="font-medium text-lg md:text-2xl text-white">Notion</p>
        </div>
        <div className="flex justify-center items-center text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-4 md:mb-0 md:px-8 md:py-4">
          <FaIntercom className="text-3xl md:text-4xl mr-2" />
          <p className="font-medium text-lg md:text-2xl text-white uppercase">Intercom</p>
        </div>
        <div className="flex justify-center items-center text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-4 md:mb-0 md:px-8 md:py-4">
          <FaFileAudio className="text-3xl md:text-4xl mr-2" />
          <p className="font-medium text-lg md:text-2xl text-white">Descript</p>
        </div>
        <div className="flex justify-center items-center text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-4 md:mb-0 md:px-8 md:py-4">
          <FaCircle className="text-3xl md:text-4xl mr-2" />
          <p className="font-medium text-lg md:text-2xl text-white">Grammarly</p>
        </div>
      </div>
    </div>
  );
};

export default Hom2;
