import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "./ProgressSteps";

const LPAused = () => {
  const navigate = useNavigate();
  const steps = [
    { title: "Enter Donor's Information " },
    { title: "Add Attorney" },
    { title: "Add Preferences" }, 
    { title: "Final Check: LPA Details" }
  ];
  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* First Column: Progress Steps */}
      <ProgressSteps steps={steps} currentStep={1} />

      {/* Second Column: LPA Usage Information */}
      <div className="bg-white shadow-md rounded-lg p-12 w-full max-w-2xl">
        <button className="flex items-center text-gray-600 text-lg font-bold hover:text-black mb-6 " 
         onClick={() => navigate(-1)}>
          <FaArrowLeft className="mr-2 text-teal-400" />
          Back
        </button>
        <h1 className="text-3xl font-serif font-bold mb-4">When can the LPA be used?</h1>
        
        {/* First Option */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-12 mb-4">
          <h2 className="text-xl font-semibold mb-2">
            As soon as it's registered (with the donor's consent)
          </h2>
          <p className="text-gray-700 text-justify text-lg">
            Most donors choose this option because it is the most practical. While the donor still has mental capacity,
            their attorneys can only act with the donor's permission. The donor will still be in control of all
            decisions affecting them.
          </p>
          <p className="text-gray-700 mt-2 text-justify text-lg">
            This option is useful if the donor is able to make their own decisions but there’s another reason they want
            their attorneys' help – for example, if the donor is away on holiday, or if they have a physical condition
            that makes it difficult to visit the bank.
          </p>
        </div>

        {/* Second Option */}
        <div className="bg-green-100 border border-green-600 rounded-lg p-12">
          <h2 className=" text-justify text-2xl font-semibold mb-2">Only if donor does not have mental capacity</h2>
          <p className="text-gray-700  text-lg text-justify ">
            This means the attorneys can only act if the donor does not have mental capacity to make certain decisions themselves.
            But be careful – this option can make the LPA a lot less useful. Every time the attorneys try to use the LPA, they
            might be asked to prove that the donor does not have mental capacity.
          </p>
        </div>
        <div className="flex justify-end">
  <button className="w-auto mt-4 bg-teal-400 border-2 border-teal-600 text-teal-700 text-lg font-medium p-2 rounded-lg hover:bg-teal-200 transition"
  onClick={()=>navigate("/addattorney")}>
    Continue
  </button>
</div>
 </div>
    </div>
  );
};

export default LPAused;
