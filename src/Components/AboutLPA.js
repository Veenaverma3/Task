import React from "react";
import ProgressSteps from "./ProgressSteps";
import FormCard from "./FormCard";
import Donorinfodisplaycard from "./Donorinfodisplaycard";
import { useNavigate } from "react-router-dom";

const AboutLPA = () => {
  const navigate = useNavigate();
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
        <div className="flex flex-col space-y-6 p-8 bg-white rounded-lg ">
           <h1 className="text-2xl font-semibold text-gray-800">
          Who should be notified about the LPA?
          </h1>
          <p className="text-gray-600">
            A Lasting Power of Attorney (LPA) allows individuals to choose 
            trusted people to make important decisions on their behalf if 
            they are unable to do so in the future. This section collects 
            details of the persons who need to be notified about this LPA.
          </p>

          <FormCard title={"Person to Notify Details"} navigateTo={"/who"} />
        </div>
        <Donorinfodisplaycard   firstParagraph="The person to notify"/>
      </div>
    </div>
  );
};

export default AboutLPA;
