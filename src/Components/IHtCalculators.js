import React from "react";
import { FaDollarSign } from "react-icons/fa6";

const IHTCalculator = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly mx-auto p-6 bg-gradient-to-r from-orange-100 to-green-50 rounded-lg shadow-md w-full">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-teal-500 text-center mb-6">
            IHT Calculator
          </h1>

          <div className="space-y-5">
            {/* Estate Value */}
            <div className="flex flex-col">
              <label className="font-semibold">
                Total Estate Value (<FaDollarSign className="inline" />)
              </label>
              <input
                type="number"
                className="border-2 p-2 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Liabilities */}
            <div className="flex flex-col">
              <label className="font-semibold">
                Total Liabilities (<FaDollarSign className="inline" />)
              </label>
              <input
                type="number"
                className="border-2 p-2 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Gifts in Last 7 Years */}
            <div className="flex flex-col">
              <label className="font-semibold">
                Gifts in Last 7 Years (<FaDollarSign className="inline" />)
              </label>
              <input
                type="number"
                className="border-2 p-2 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Charitable Donations */}
            <div className="flex flex-col">
              <label className="font-semibold">
                Charitable Donations (<FaDollarSign className="inline" />)
              </label>
              <input
                type="number"
                className="border-2 p-2 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>
          </div>

          {/* Nil Rate Band Checkbox */}
          <div className="flex items-center space-x-3 mt-4">
            <input type="checkbox" className="w-5 h-5 accent-teal-500" />
            <span className="font-semibold">
              Apply Nil Rate (<FaDollarSign className="inline" /> 325,000)
            </span>
          </div>

          {/* IHT Result Box */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md text-center w-full mt-6">
            <h2 className="text-lg font-semibold">Estimated IHT Liability</h2>
            <p className="text-xl font-bold text-red-500">
              <FaDollarSign className="inline" /> 0.00
            </p>
          </div>

          {/* Submit Button */}
          <button className="w-full mt-6 bg-teal-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-600 transition">
            Get a Free IHT Consultation
          </button>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="w-full md:w-1/3  p-6 rounded-md  md:mr-14 ">
        <h2 className="text-3xl mb-3 font-serif font-semibold text-center">
          How IHT is Calculated
        </h2>
        <p className="text-lg text-gray-700 text-justify">
          Once you enter your details, the calculator will compute your
          estimated Inheritance Tax (IHT) liability using the following formula:
        </p>
        <p className="font-semibold my-2 text-justify">
          IHT Liability = (Total Estate - Liabilities - Exemptions - Allowances)
          × Tax Rate
        </p>
        <p className="text-lg  text-gray-700 text-justify">
          The standard Inheritance Tax rate is 40%, applied to the portion of
          the estate exceeding the Nil Rate Band (NRB) threshold of £325,000.
          However, if at least 10% of the estate is donated to charity, the tax
          rate reduces to 36%.
        </p>

        {/* Example Calculation */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md  mt-4">
          <h3 className="font-semibold text-lg text-left">
            Example Calculation
          </h3>
          <div className="space-y-4 text-justify">
            <p className="text-sm text-gray-700">
              <strong>Total Estate Value:</strong> £750,000
            </p>
            <p className="text-sm text-gray-700">
              <strong>Liabilities:</strong> £100,000
            </p>
            <p className="text-sm text-gray-700">
              <strong>Exemptions & Allowances (NRB & RNRB):</strong> £325,000
            </p>
            <p className="text-sm text-gray-700">
              <strong>Taxable Estate:</strong> £750,000 - £100,000 - £325,000 =
              £325,000
            </p>
            <p className="font-semibold">
              <strong>IHT Payable:</strong> £325,000 × 40% = £130,000
            </p>
            <p className="text-sm text-gray-700">
              If the individual donates 10% of the estate to charity, the tax
              rate drops to 36%, reducing IHT to £117,000 instead of £130,000.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IHTCalculator;
