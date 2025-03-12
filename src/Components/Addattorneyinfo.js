import React from 'react';
import ProgressSteps from './ProgressSteps';
 import Donorinfodisplaycard from './Donorinfodisplaycard';
 import FormCard from './FormCard';

const Addattorneyinfo = () => {
   const steps = [
    { title: "Enter Donor's Information " },
    { title: "Add Attorney" },
    { title: "Add Preferences" }, 
    { title: "Final Check: LPA Details" }
  ];

  return (
    <div className="flex flex-col mt-14 lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      <ProgressSteps steps={steps} currentStep={1} />
      <div className="flex flex-col w-full max-w-2xl space-y-6">
         <div className="flex flex-col space-y-6 p-8 bg-white rounded-lg shadow">
 <FormCard title={"Add Attorney Information"} navigateTo="/donorwant"/>    
        
        </div>
        <Donorinfodisplaycard  firstParagraph="The Arrorney " />
      </div>
    </div>
  );
};

export default Addattorneyinfo;
