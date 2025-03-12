import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressSteps from './ProgressSteps';
import DonorInfoForm from './DonorInfoForm';
import Donorinfodisplaycard from './Donorinfodisplaycard';
import AddressForm from './AddressForm';

const Addattorneyinfo = () => {
  const navigate = useNavigate();

  const steps = [
    { title: "Enter Donor's Information " },
    { title: "Add Attorney" },
    { title: "Add Preferences" }, 
    { title: "Final Check: LPA Details" }
  ];

  return (
    <div className="flex flex-col mt-14 lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      <ProgressSteps steps={steps} currentStep={0} />
      <div className="flex flex-col w-full max-w-2xl space-y-6">
        <div className="flex flex-col space-y-6 p-8 bg-white rounded-lg shadow">
          <DonorInfoForm  title="Add Donor Information" />
          <AddressForm />
          {/* Right-aligned Buttons */}
          <div className="flex justify-end">
           
            <button 
              onClick={() => navigate('/lpaused')} 
              className="px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-600 transition"
            >
              Add Donor
            </button>
          </div>
        </div>
        <Donorinfodisplaycard  firstParagraph="The Donor " />
      </div>
    </div>
  );
};

export default Addattorneyinfo;
