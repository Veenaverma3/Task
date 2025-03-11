import React from 'react'
import { FaIdCard, FaQuestion, FaStar } from 'react-icons/fa'
import { FaNoteSticky } from 'react-icons/fa6'

const Hom3 = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-r
from-slate-100
via-amber-50
to-green-100">
      {/* 1st Section: Introduction and Ratings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-6 mb-8">
        <div className='p-5'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl capitalize font-serif font-semibold mb-6 text-gray-800">
            Create your will in <br />
            <span className="text-teal-400 mt-6">Just Simple Steps</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Creating a will doesn't have to be complicated. With our streamlined process, you can secure your family's future in just four easy steps. From answering a few basic questions to securely storing your final document, we guide you every step of the way to ensure peace of mind for you and your loved ones.
          </p>
          <button className="px-6 py-3 rounded-full bg-teal-400 text-white text-lg font-semibold hover:bg-teal-500 transition duration-300">
            Get Started
          </button>
          <div className="mt-8 flex flex-wrap justify-between gap-8 sm:gap-12">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-300" />
              ))}
              <span className="font-semibold">4.9/5 rating</span>
              <span className="block text-gray-600">Trustpilot</span>
            </div>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-300" />
              ))}
              <span className="font-semibold text-xl block">4.8/5 rating</span>
              <span className="block text-gray-600">Google</span>
            </div>
          </div>
        </div>

        {/* 2nd Section: Steps */}
        <div className="space-y-12 p-5">
          <div className="flex items-start space-x-4">
            <FaQuestion className="text-teal-400 text-3xl sm:text-4xl" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Step 1: Answer a Few Questions</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Our simple questionnaire ensures you get the answers you need, quickly and easily.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaIdCard className="text-teal-400 text-3xl sm:text-4xl" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Step 2: Add Beneficiaries</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Add your loved ones as beneficiaries, ensuring they are taken care of in the future.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaNoteSticky className="text-teal-400 text-3xl sm:text-4xl" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Step 3: Store & Access Anytime</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Safely store your will and access it whenever necessary with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hom3
