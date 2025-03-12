import React from "react";
import ProgressSteps from "./ProgressSteps";
import FormCard from "./FormCard";
 import Donorinfodisplaycard from "./Donorinfodisplaycard";

const Certidetail = () => {
     const steps = [
      { title: "Enter Donor's Information " },
      { title: "Add Attorney" },
      { title: "Add Preferences" }, 
      { title: "Final Check: LPA Details" }
    ];
  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly w-full p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      <ProgressSteps steps={steps} currentStep={1} />
      <div className="flex flex-col w-full max-w-2xl space-y-6">
         <div className="flex flex-col space-y-6 p-8 bg-white rounded-lg shadow">
 <FormCard title={"Certificate Provider details"} navigateTo={"/aboutlpa"} />    
        
        </div>
        <Donorinfodisplaycard   firstParagraph="The Certificate Provider"/>
      </div>
    </div>
  );
};

export default Certidetail;
