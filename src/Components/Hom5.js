import React from "react";
 import { FaAnchorCircleCheck, FaDollarSign} from "react-icons/fa6";

const plans = [
  {
    title: "Basic",
    description: "A simple solution for creating and storing your will securely.",
    price: "99.99",
    features: ["Secure Wills", "Legal Review", "Easy Updates", "Chat Support", "Digital Storage"],
    buttonText: "Sign up for Basic",
    bgColor: "bg-white",
    borderColor: "border-gray-300",
  },
  {
    title: "Premium",
    description: "A robust plan with extra features and savings.",
    discount: "Save $50 a year",
    price: "199.99",
    features: ["Secure Wills", "Legal Review", "Easy Updates", "Chat Support", "Digital Storage"],
    buttonText: "Go to Pro",
    bgColor: "bg-teal-500 text-white",
    borderColor: "border-teal-500",
    isPremium: true, // Flag for styling
  },
  {
    title: "Pro",
    description: "Advanced features for complete security and flexibility.",
    price: "299.99",
    features: ["Secure Wills", "Legal Review", "Easy Updates", "Chat Support", "Digital Storage"],
    buttonText: "Go to Business",
    bgColor: "bg-white",
    borderColor: "border-gray-300",
  },
];

const Hom5 = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-10 lg:p-16 bg-gradient-to-r from-slate-200 via-yellow-100 to-green-100">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
        Choose a plan <br /> that's right for you
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8">
        Choose the plan that works best for you, feel free to contact us.
      </p>

      {/* Billing Options */}
      <div className="flex space-x-4 p-2 rounded-lg mb-10">
        <button className="px-6 py-2 bg-teal-500 text-white font-medium rounded-md shadow-md hover:bg-teal-600">
          Billed Monthly
        </button>
        <button className="px-6 py-2 bg-white text-gray-800 font-medium rounded-md border border-gray-300 hover:bg-gray-200">
          Billed Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-lg border  ${plan.borderColor} ${plan.bgColor} text-center ${
              plan.isPremium ? "scale-105 lg:scale-110 p-8" : ""
            } transition-transform duration-300`}
          >
            <h1 className="text-2xl font-semibold mb-2">{plan.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
            <p className="flex justify-center items-center text-3xl font-bold mb-4">
              <FaDollarSign className="mr-1" />
              {plan.price}
            </p>
            {plan.discount && <p className="text-teal-600 bg-slate-300 rounded-md w-32 m-auto font-medium mb-2">{plan.discount}</p>}
             <div className="space-y-2 mb-6 mt-4 w-44 m-auto rounded-lg bg-white">
              {plan.features.map((feature, i) => (
                <p key={i} className="flex items-center justify-center text-gray-700">
                  <FaAnchorCircleCheck className="mr-2 text-teal-500" />
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`w-full py-2 rounded-md font-medium shadow-md ${
                plan.bgColor === "bg-teal-500 text-white"
                  ? "bg-white text-teal-500 border border-white hover:bg-gray-100"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hom5;
