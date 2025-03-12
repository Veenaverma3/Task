import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressSteps from './ProgressSteps';

const Instructions = () => {
  const navigate = useNavigate();  

  const steps = [
    { title: "Enter Donor's Information" },
    { title: "Add Attorney" },
    { title: "Add Preferences" }, 
    { title: "Final Check: LPA Details" }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Progress Steps */}
      <ProgressSteps steps={steps} currentStep={2} />

      {/* Instructions Content */}
      <div className="flex flex-col w-full  max-w-xl space-y-4 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Add Preferences and Instructionsr</h1>
        <p className="text-gray-600 text-center ">
        You've entered all the essential information needed for the<br/> LPA.<br/><br/>

The optional section below lets you add the donor’s<br/> preferences or instructions for their attorneys. The donor can<br/> state things that the attorneys must or must not do, or give<br/> guidance that they’d like their attorneys to follow.<br/><br/>

For example, the donor could add preferences about making<br/> charitable donations or managing their bank accounts. The <br/>donor could add instructions about giving gifts, managing<br/> investments or seeking professional tax advice.
          </p>

        {/* Single "Add and Continue" Button */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => navigate('/final')} 
            className="px-6 py-2 bg-teal-400 text-white rounded-lg shadow hover:bg-teal-600 transition"
          >
            Add and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
